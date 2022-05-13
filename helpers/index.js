import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../lib/firebase'

export const getProjectList = async () => {
  const snapshot = await getDocs(
    query(collection(db, 'projects'), orderBy('time', 'desc'))
  )
  if (!snapshot.empty) {
    return snapshot.docs.map((item) => item.data())
  }
}
