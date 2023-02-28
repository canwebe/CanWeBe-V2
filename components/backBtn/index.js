import styles from './backBtn.module.css'
import { useRouter } from 'next/router'
import { MdArrowBack } from 'react-icons/md'

export default function BackBtn({ refer }) {
  const router = useRouter()
  const handleClick = () => {
    try {
      if (refer) {
        window.location.assign(refer)
      } else {
        router.back()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button onClick={handleClick} className={styles.btn}>
      <MdArrowBack /> Back
    </button>
  )
}
