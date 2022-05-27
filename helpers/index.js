import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
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
