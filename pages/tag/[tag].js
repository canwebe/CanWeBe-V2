import { getBlogPostByTag, getColData } from '../../helpers'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import styles from '../../styles/Blogs.module.css'
import { useRouter } from 'next/router'
import GoBackpageBtn from '../../components/goBackPageBtn'
import Head from 'next/head'

export default function Tag({ data }) {
  const router = useRouter()
  return <>
    <Head>
      <title>{router.query.tag} | CanWeBe</title>
    </Head>
    <div className='sectionbody'>
      <div className='wrapper'>
        <h1 className='pageHeader'>
          Tag : <span className={styles.tagName}>{router.query.tag}</span>
        </h1>
        <GoBackpageBtn />
        <div style={{ marginBottom: '20px' }} />
        <div className={styles.blogWrapper}>
          {data.map((item, i) => (
            (<Link href={`/blogs/${item.slug}`} key={i} className={styles.postCard}>

              <div className={styles.postimg}>
                <Image
                  src={item.imgsrc}
                  layout='fill'
                  objectFit='cover'
                  alt='blog image'
                  placeholder='blur'
                  blurDataURL='/assets/placeholder.webp'
                />
              </div>
              <div className={styles.postcontent}>
                <p className={styles.time}>
                  {moment
                    .unix(item.timestamp.seconds)
                    .format('MMM DD , YYYY')}
                </p>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.name}>By {item.name}</p>
                <p className={styles.info}>{item.shortinfo}</p>
              </div>

            </Link>)
          ))}
        </div>
      </div>
    </div>
  </>;
}

export async function getStaticPaths() {
  const blogs = await getColData('blogs')
  const tagLists = blogs.map((item) => item.taglist)
  const tagSet = new Set(tagLists.flat())
  const tagsPath = Array.from(tagSet).map((item) => ({ params: { tag: item } }))
  return {
    paths: tagsPath,
    fallback: false,
  }
}

export async function getStaticProps({ params: { tag } }) {
  const jsondata = await getBlogPostByTag(tag)
  const data = await JSON.parse(JSON.stringify(jsondata))
  return {
    props: { data },
  }
}
