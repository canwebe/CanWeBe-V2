import { useState } from 'react'
import styles from '../../styles/Form.module.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { addMessageForms } from '../../helpers'
import { useRouter } from 'next/router'
import BackBtn from '../../components/backBtn'

export default function Contact() {
  const [data, setData] = useState({
    name: '',
    email: '',
    query: '',
  })
  const { name, email, query } = data
  const [page, setPage] = useState(0)
  const [finish, setFinish] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { refer } = router.query
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePage = (e, dir) => {
    e.preventDefault()
    setPage((prev) => prev + dir)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      addMessageForms('contact', data).then(() => {
        setFinish(true)
        setLoading(false)
        setTimeout(() => {
          router.back()
        }, 3000)
      })
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const question = [
    <>
      <label>
        1. What Should we call you, <strong>Your Name</strong>.
      </label>
      <input
        className={styles.textInput}
        name="name"
        value={name}
        placeholder="Your Name"
        onChange={handleChange}
        type="text"
        required
        autoFocus
        autoCapitalize="words"
      />
    </>,
    <>
      <label>
        2. What <strong>email address</strong> can we reach you at? This is only
        to get in touch, not to send spam.
      </label>
      <input
        className={styles.textInput}
        name="email"
        value={email}
        placeholder="example@email.com"
        onChange={handleChange}
        type="email"
        required
      />
    </>,
    <>
      <label>
        3. {name}, What is your <strong>Query</strong>.
      </label>
      <textarea
        className={styles.textInput}
        name="query"
        value={query}
        rows={2}
        placeholder="Type your message here"
        onChange={handleChange}
        required
        autoCapitalize="on"
        autoFocus
      />
    </>,
  ]
  console.log(refer)
  return (
    <div className={styles.formSection}>
      <BackBtn refer={refer} />
      <div className="wrapper">
        {finish ? (
          <p className={styles.thanks}>
            Thanks For You Your Time , We will get back to you soon.
            <span className={styles.redirect}>
              Wait automatically redirecting
            </span>
          </p>
        ) : (
          <form
            autoComplete="off"
            className={styles.form}
            onSubmit={handleSubmit}
          >
            {question[page]}
            <div className={styles.btnWrapper}>
              {page !== 0 && (
                <button
                  className={styles.btnPrev}
                  onClick={(e) => handlePage(e, -1)}
                >
                  <FaAngleLeft />
                  Prev
                </button>
              )}
              {page === 0 && name !== '' && (
                <button
                  className={`${styles.btnNext} ${
                    name === '' ? 'disabled' : ''
                  }`}
                  disabled={name === ''}
                  onClick={(e) => handlePage(e, 1)}
                >
                  Ok <FaAngleRight />
                </button>
              )}
              {page === 1 && (
                <button
                  className={`${styles.btnNext} ${
                    regex.test(email) ? '' : 'disabled'
                  }`}
                  disabled={email === ''}
                  onClick={(e) => handlePage(e, 1)}
                >
                  Next <FaAngleRight />
                </button>
              )}

              {page == 2 && (
                <button
                  className={`${styles.btn} ${query === '' ? 'disabled' : ''}`}
                  disabled={query === '' || loading}
                  type="submit"
                >
                  {loading ? 'loading' : 'Submit'}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
