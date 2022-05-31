import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from 'firebase/firestore'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage'
import { db, storage } from '../lib/firebase'

export const getProjectList = async (lim) => {
  let q
  if (lim) {
    q = query(collection(db, 'projects'), orderBy('time', 'desc'), limit(lim))
  } else {
    q = query(collection(db, 'projects'), orderBy('time', 'desc'))
  }
  const snapshot = await getDocs(q)

  if (!snapshot.empty) {
    return snapshot.docs.map((item) => ({ ...item.data(), id: item.id }))
  } else {
    return null
  }
}

export const getColData = async (colname, sort) => {
  let snapshot
  if (sort) {
    snapshot = await getDocs(
      query(collection(db, colname), orderBy('timestamp', 'desc'))
    )
  } else {
    snapshot = await getDocs(collection(db, colname))
  }

  if (!snapshot.empty) {
    return snapshot.docs.map((item) => item.data())
  } else {
    return null
  }
}

export const getTeamData = async () => {
  const snapshot = await getDocs(query(collection(db, 'team'), orderBy('rank')))
  if (!snapshot.empty) {
    return snapshot.docs.map((item) => item.data())
  } else {
    return null
  }
}

export const getAdditionalData = async (id) => {
  const snapshot = await getDocs(collection(db, `projects/${id}/additional`))
  if (!snapshot.empty) {
    return snapshot.docs[0].data()
  } else {
    return null
  }
}

export const addMessageForms = async (colname, data) => {
  await addDoc(collection(db, colname), data)
}

export const addBlogPost = async (data, photo) => {
  const { name, content, shortinfo, tags } = data
  const title = data.title.trim()
  const slug = title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')

  const taglist = tags
    .trim()
    .split(',')
    .map((item) => item.toLowerCase().trim())
    .filter((item) => item !== '')

  const imgsrc = await uploadImage(slug, photo)

  await addDoc(collection(db, 'blogs'), {
    name,
    imgsrc,
    title,
    slug,
    shortinfo,
    taglist,
    timestamp: serverTimestamp(),
  })
  await addDoc(collection(db, 'blogposts'), {
    slug,
    name,
    content,
    imgsrc,
    taglist,
    title,
    timestamp: serverTimestamp(),
  })
}

export const getBlogPost = async (colname, slug) => {
  const q = query(collection(db, colname), where('slug', '==', slug))
  const data = await getDocs(q)

  if (!data.empty) {
    return data.docs[0].data()
  } else {
    return null
  }
}

export const updateBlogPost = async (slug, data, photo, isChange) => {
  let { name, content, shortinfo, tags, imgsrc } = data
  const title = data.title.trim()
  const taglist = tags
    .trim()
    .split(',')
    .map((item) => item.toLowerCase().trim())
    .filter((item) => item !== '')

  const q2 = query(collection(db, 'blogposts'), where('slug', '==', slug))
  const q1 = query(collection(db, 'blogs'), where('slug', '==', slug))

  const snapshot1 = await getDocs(q1)
  const snapshot2 = await getDocs(q2)

  if (!snapshot1.empty && !snapshot2.empty) {
    if (isChange) {
      imgsrc = await uploadImage(slug, photo)
    }
    await updateDoc(snapshot1.docs[0].ref, {
      name,
      imgsrc,
      title,
      shortinfo,
      taglist,
    })

    await updateDoc(snapshot2.docs[0].ref, {
      name,
      content,
      imgsrc,
      taglist,
      title,
    })
  }
}

export const getBlogPostByTag = async (tag) => {
  const q = query(
    collection(db, 'blogs'),
    where('taglist', 'array-contains', tag)
  )
  const data = await getDocs(q)

  if (!data.empty) {
    return data.docs.map((item) => item.data())
  } else {
    return null
  }
}

export const uploadImage = async (slug, file) => {
  const storageRef = ref(storage, 'blogs/' + slug)
  const snapshot = await uploadBytes(storageRef, file)
  const url = await getDownloadURL(snapshot.ref)
  return url
}

export const deletePost = async (slug) => {
  const q2 = query(collection(db, 'blogposts'), where('slug', '==', slug))
  const q1 = query(collection(db, 'blogs'), where('slug', '==', slug))
  const storageRef = ref(storage, 'blogs/' + slug)

  const snapshot1 = await getDocs(q1)
  const snapshot2 = await getDocs(q2)

  if (!snapshot1.empty && !snapshot2.empty) {
    await deleteDoc(snapshot1.docs[0].ref)
    await deleteDoc(snapshot2.docs[0].ref)
    await deleteObject(storageRef)
  }
}
