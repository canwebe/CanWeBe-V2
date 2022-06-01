import { useState } from 'react'
import { addBlogPost } from '../../helpers'
import styles from '../../styles/Create.module.css'
import Head from 'next/head'

export default function Create() {
  const [data, setData] = useState({
    title: '',
    name: 'Golam Rabbani',
    content: '',
    shortinfo: '',
    tags: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [photo, setPhoto] = useState(null)
  const { title, name, content, imgsrc, shortinfo, tags } = data

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSubmit = async (e) => {
    console.log('click')
    e.preventDefault()
    setLoading(true)
    setError('')
    const passcode = prompt('Enter the passcode')
    try {
      if (passcode === process.env.NEXT_PUBLIC_ADMIN_KEY) {
        await addBlogPost(data, photo)
        setLoading(false)
        setData({
          title: '',
          name: 'Golam Rabbani',
          content: '',
          shortinfo: '',
          tags: '',
        })
        setPhoto(null)
        alert(title + ' added succesfully')
      } else {
        setError('Passcode wrong Try Again')
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Create Blog | CanWeBe</title>
      </Head>
      <div className='sectionbody'>
        <div className='wrapper'>
          <h1 className='pageHeader'>Create Post.</h1>
          <form className={styles.createWrapper} onSubmit={handleSubmit}>
            <input
              className={styles.inputtext}
              onChange={handleChange}
              name='title'
              placeholder='Enter The Title'
              required
              type='text'
              value={title}
              maxLength={100}
            />
            <div className={styles.inputwrapper}>
              <input
                className={styles.inputtext}
                onChange={(e) => setPhoto(e.target.files[0])}
                accept='image/*'
                type='file'
              />
              <select
                className={styles.inputtext}
                name='name'
                value={name}
                required
                onChange={handleChange}
              >
                <option value='Golam Rabbani'>Golam Rabbani</option>
                <option value='Anish Tharu'>Anish Tharu</option>
                <option value='Ganesh Kumar'>Ganesh Kumar</option>
                <option value='Mohd Zahid'>Mohd Zahid</option>
              </select>
            </div>
            <input
              className={styles.inputtext}
              onChange={handleChange}
              name='tags'
              placeholder='eg: react,javascript,html'
              required
              type='text'
              value={tags}
            />

            <textarea
              onChange={handleChange}
              name='shortinfo'
              placeholder='Type short info'
              required
              rows={2}
              value={shortinfo}
              maxLength={150}
              className={styles.shortinfo}
            />

            <textarea
              className={styles.markdownArea}
              name='content'
              onChange={handleChange}
              required
              value={content}
              rows='10'
              placeholder='Attention this is markdown content'
            />

            <button
              className={`${styles.btn} full`}
              type='submit'
              disabled={loading}
            >
              {loading ? 'Adding' : 'Add Post'}
            </button>
            {error && <p className={styles.error}>{error}</p>}
          </form>
        </div>
      </div>
    </>
  )
}
