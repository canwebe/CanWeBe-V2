import styles from './backBtn.module.css'
import { useRouter } from 'next/router'
import { MdArrowBack } from 'react-icons/md'

export default function BackBtn() {
  const router = useRouter()
  return (
    <button onClick={() => router.back()} className={styles.btn}>
      <MdArrowBack /> Back
    </button>
  )
}
