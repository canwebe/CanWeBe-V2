import { useState } from 'react'
import {
  deletePost,
  getBlogPost,
  getColData,
  updateBlogPost,
} from '../../../helpers'
import styles from '../../../styles/Create.module.css'
import { useRouter } from 'next/router'
import { members } from '../../../helpers/data'

export default function Create({ name, title, taglist, content, shortinfo }) {
  const [data, setData] = useState({
    title,
    name,
    content,
    shortinfo,
    tags: taglist.join(','),
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()
  const { slug } = router.query
  // const { title, name, content, imgsrc, shortinfo, tags } = data
  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    const passcode = prompt('Enter the passcode')
    if (passcode === process.env.NEXT_PUBLIC_ADMIN_KEY) {
      try {
        await deletePost(slug)
        alert('Deleted succesfully')
      } catch (error) {
        console.log(error)
        setError(error.message)
      }
    } else {
      setError('Passcode wrong Try Again')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const passcode = prompt('Enter the passcode')
    try {
      if (passcode === process.env.NEXT_PUBLIC_ADMIN_KEY) {
        await updateBlogPost(slug, data)
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
      <div className="sectionbody">
        <div className="wrapper">
          <h1 className="pageHeader">Update Post.</h1>

          <form className={styles.createWrapper} onSubmit={handleSubmit}>
            <input
              className={styles.inputtext}
              onChange={handleChange}
              name="title"
              placeholder="Enter The Title"
              required
              type="text"
              value={data.title}
              maxLength={100}
            />
            <div className={styles.inputwrapperEdit}>
              <input
                className={styles.inputtext}
                onChange={handleChange}
                name="tags"
                placeholder="eg: react,javascript,html"
                required
                type="text"
                value={data.tags}
              />
              <select
                className={styles.inputtext}
                name="name"
                value={data.name}
                required
                onChange={handleChange}
              >
                <option value="">Author</option>
                {members.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              onChange={handleChange}
              name="shortinfo"
              placeholder="Type short info"
              required
              rows={2}
              value={data.shortinfo}
              maxLength={150}
              className={styles.shortinfo}
            />

            <textarea
              className={styles.markdownArea}
              name="content"
              onChange={handleChange}
              required
              value={data.content}
              rows="10"
              placeholder="Attention this is markdown content"
            />
            <div className={styles.btnWrapper}>
              <button onClick={handleDelete} className={styles.btnDlt}>
                Delete
              </button>
              <button className={styles.btn} type="submit" disabled={loading}>
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
