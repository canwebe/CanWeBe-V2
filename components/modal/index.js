import { useEffect } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import styles from './modal.module.css'

export default function Modal({ setIsModal }) {
  useEffect(() => {
    document.querySelector('body').style.overflow = 'hidden'

    return () => (document.querySelector('body').style.overflow = 'auto')
  }, [])

  return (
    <div className={styles.backDrop}>
      <div className={styles.modal}>
        <MdOutlineClose
          onClick={() => setIsModal(false)}
          className={styles.cross}
        />
        <div>
          <p>
            If you want to help us financialy please contact us to get more
            information or pay directly to this UPI
            <br />
            <br />
            <br />
            <br />
            <strong>Contact Us : </strong> contact@canwebe.tech
            <br />
            <br />
            <strong>UPI : </strong> 8867398996@paytm
            <br />
          </p>
        </div>
      </div>
    </div>
  )
}
