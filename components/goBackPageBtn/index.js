import { FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/router'
import styles from './goBackBtn.module.css'

export default function GoBackpageBtn() {
  const router = useRouter()
  return (
    <button className={styles.gobackBtn} onClick={() => router.back()}>
      <FaArrowLeft /> Go Back
    </button>
  )
}
