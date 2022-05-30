import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore'
import { db } from '../lib/firebase'

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

export const getColData = async (colname) => {
  const snapshot = await getDocs(collection(db, colname))
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

export const addBlogPost = async (data) => {
  const { name, content, imgsrc, shortinfo, tags } = data
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

export const getBlogPost = async (slug) => {
  const q = query(collection(db, 'blogposts'), where('slug', '==', slug))
  const data = await getDocs(q)

  if (!data.empty) {
    return data.docs[0].data()
  } else {
    return null
  }
}
