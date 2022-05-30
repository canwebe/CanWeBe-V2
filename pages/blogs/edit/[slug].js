import { useState } from 'react'
import { getBlogPost, getColData, updateBlogPost } from '../../../helpers'
import styles from '../../../styles/Create.module.css'
import { useRouter } from 'next/router'
export default function Create({
  name,
  title,
  taglist,
  imgsrc,
  content,
  shortinfo,
}) {
  const [data, setData] = useState({
    title,
    name,
    content,
    imgsrc,
    shortinfo,
    tags: taglist.join(','),
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()
  // const { title, name, content, imgsrc, shortinfo, tags } = data
  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDelete = () => {}
  const handleSubmit = async (e) => {
    console.log('click')
    e.preventDefault()
    setLoading(true)
    setError('')
    const passcode = prompt('Enter the passcode')
    try {
      if (passcode === '123') {
        await updateBlogPost(router.query.slug, data)
        setLoading(false)
        alert(title + ' updated succesfully')
        router.back()
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
      <div className='sectionbody'>
        <div className='wrapper'>
          <h1 className='pageHeader'>Update Post.</h1>
          <form className={styles.createWrapper} onSubmit={handleSubmit}>
            <input
              className={styles.inputtext}
              onChange={handleChange}
              name='title'
              placeholder='Enter The Title'
              required
              type='text'
              value={data.title}
              maxLength={100}
            />
            <div className={styles.inputwrapper}>
              <input
                className={styles.inputtext}
                onChange={handleChange}
                name='imgsrc'
                placeholder='Paste Image Link'
                required
                type='text'
                value={data.imgsrc}
              />
              <select
                className={styles.inputtext}
                name='name'
                value={data.name}
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
              value={data.tags}
            />

            <textarea
              onChange={handleChange}
              name='shortinfo'
              placeholder='Type short info'
              required
              rows={2}
              value={data.shortinfo}
              maxLength={150}
              className={styles.shortinfo}
            />

            <textarea
              className={styles.markdownArea}
              name='content'
              onChange={handleChange}
              required
              value={data.content}
              rows='10'
              placeholder='Attention this is markdown content'
            />
            <div className={styles.btnWrapper}>
              <button onClick={handleDelete} className={styles.btnDlt}>
                Delete
              </button>
              <button className={styles.btn} type='submit' disabled={loading}>
                {loading ? 'Updating' : 'Update Post'}
              </button>
            </div>

            {error && <p className={styles.error}>{error}</p>}
          </form>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const data = await getColData('blogs')
  const dataArray = data.map((item) => ({
    params: { slug: item.slug },
  }))

  return {
    paths: dataArray,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const data = await getBlogPost('blogposts', slug)
  const shortdata = await getBlogPost('blogs', slug)

  const { name, title, taglist, imgsrc, content } = data
  const { shortinfo } = shortdata

  return {
    props: { name, title, taglist, imgsrc, content, shortinfo },
  }
}
