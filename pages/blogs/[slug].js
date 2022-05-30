import { useRouter } from 'next/router'
import styles from '../../styles/Post.module.css'
import { FaArrowLeft, FaCalendarDay, FaUserCircle } from 'react-icons/fa'
import { getBlogPost, getColData } from '../../helpers'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import moment from 'moment'
import readingTime from 'reading-time'

export default function Post({
  name,
  title,
  taglist,
  imgsrc,
  seconds,
  source,
}) {
  const router = useRouter()
  return (
    <>
      <div className='sectionbody'>
        <div
          className={styles.blackBg}
          style={{
            backgroundImage:
              "linear-gradient(to right,rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url('/ogcanwebe.webp')",
          }}
        ></div>
        <div className={styles.postWrapper}>
          <div className={styles.postTitleWrapper}>
            <button className={styles.gobackBtn} onClick={() => router.back()}>
              <FaArrowLeft /> Go Back
            </button>
            <p className={styles.postTitle}>{title}</p>
            <div className={styles.datenameWrapper}>
              <p className={styles.date}>
                <FaCalendarDay color='#00ecff' size={15} />{' '}
                {moment.unix(seconds).format('MMM DD , YYYY')}
              </p>
              <p className={styles.name}>
                <FaUserCircle color='#bc5656' size={15} /> {name}
              </p>
            </div>
          </div>
          <div className={styles.postContent}>
            <MDXRemote {...source} />
          </div>
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
  const data = await getBlogPost(slug)
  console.log(data)
  const {
    name,
    title,
    taglist,
    imgsrc,
    timestamp: { seconds },
    content,
  } = data
  const mdxSource = await serialize(content)
  const time = readingTime(content)
  console.log(time)
  return {
    props: { name, title, taglist, imgsrc, seconds, source: mdxSource },
  }
}
