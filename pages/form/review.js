import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Form.module.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import StarComponent from '../../components/starComponent'
import BackBtn from '../../components/backBtn'
import { addMessageForms, getProjectList } from '../../helpers'

export default function Review({ projectlist }) {
  const router = useRouter()
  const pname = router.query?.project
  const [data, setData] = useState({
    name: '',
    project: pname || 'canwebe',
    feedback: '',
    rating: 0,
  })
  const { name, project, feedback, rating } = data
  const [finish, setFinsh] = useState(false)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(pname ? 1 : 0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      addMessageForms('review', data).then(() => {
        setLoading(false)
        setFinsh(true)
        setTimeout(() => {
          router.back()
        }, 2000)
      })
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const handleStar = (star) => {
    setData((prev) => ({
      ...prev,
      rating: star,
    }))
  }

  const handlePage = (e, dir) => {
    e.preventDefault()
    setPage((prev) => prev + dir)
  }

  const question = [
    <>
      <label>
        1. Do you want to give <strong>review</strong> for
      </label>
      <select
        name='project'
        onChange={handleChange}
        value={project}
        className={styles.textInput}
      >
        <option value='canwebe'>CanWeBe</option>
        {projectlist.map((item, i) => (
          <option key={i} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </select>
    </>,
    <>
      <label>2. Hey I&apos;m Anish. And you are ?</label>
      <input
        className={styles.textInput}
        name='name'
        value={name}
        placeholder='Your Name'
        onChange={handleChange}
        type='text'
        required
      />
    </>,
    <>
      <label>
        3. Nice to meet you <span className={styles.name}>{name}</span>, How
        would you rate
        <strong> {project}</strong> ?
      </label>
      <StarComponent handleStar={handleStar} rating={rating} />
    </>,
    <>
      <label>
        4. <span className={styles.name}>{name}</span>, We want to hear from
        you.
      </label>
      <textarea
        className={styles.textInput}
        name='feedback'
        value={feedback}
        rows={2}
        placeholder='Type your feedback'
        onChange={handleChange}
      />
    </>,
  ]
  return (
    <div className={styles.formSection}>
      <BackBtn />
      <div className='wrapper'>
        {finish ? (
          <p className={styles.thanks}>
            Thanks For You Your Time , We will get back to you soon.
            <span className={styles.redirect}>
              Wait automatically redirecting
            </span>
          </p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            {question[page]}
            <div className={styles.btnWrapper}>
              {page !== 0 && (
                <button
                  className={styles.btn}
                  onClick={(e) => handlePage(e, -1)}
                >
                  <FaAngleLeft />
                  Prev
                </button>
              )}
              {page === 0 && (
                <button
                  className={styles.btn}
                  onClick={(e) => handlePage(e, 1)}
                >
                  Next <FaAngleRight />
                </button>
              )}
              {page === 1 && (
                <button
                  className={`${styles.btn} ${name === '' ? 'disabled' : ''}`}
                  disabled={name === ''}
                  onClick={(e) => handlePage(e, 1)}
                >
                  Next <FaAngleRight />
                </button>
              )}
              {page === 2 && (
                <button
                  className={`${styles.btn} ${rating === 0 ? 'disabled' : ''}`}
                  disabled={rating === 0}
                  onClick={(e) => handlePage(e, 1)}
                >
                  Next <FaAngleRight />
                </button>
              )}
              {page == 3 && (
                <button
                  className={`${styles.btn} ${
                    feedback === '' ? 'disabled' : ''
                  }`}
                  disabled={feedback === '' || loading}
                  type='submit'
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

export async function getStaticProps() {
  const data = await getProjectList()
  const projectlist = data.map((item) => item.name)
  // const projectlist = await JSON.parse(await JSON.stringify(data))
  return {
    props: {
      projectlist,
    },
  }
}
