import styles from '../../styles/Blogs.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getColData } from '../../helpers'
import moment from 'moment'
import Head from 'next/head'

export default function Blogs({ data }) {
  const [searchStr, setSearchStr] = useState('')
  let filterList = data
  if (searchStr.length > 3) {
    filterList = data.filter((item) =>
      item.title.toLowerCase().includes(searchStr.trim().toLowerCase())
    )
  }
  return (
    <>
      <Head>
        <title>Blogs | CanWeBe</title>
      </Head>
      <div className='sectionbody'>
        <div className='wrapper'>
          <h1 className='pageHeader'>Blogs.</h1>

          <input
            className={styles.searchBox}
            placeholder='Type to search blog posts'
            type='text'
            value={searchStr}
            onChange={(e) => setSearchStr(e.target.value)}
          />

          <h3 className='header'>All Posts ({filterList.length})</h3>
          {filterList.length === 0 && <p>No Post Found</p>}
          <div className={styles.blogWrapper}>
            {filterList.map((item, i) => (
              <Link href={`/blogs/${item.slug}`} key={i}>
                <a className={styles.postCard}>
                  <div className={styles.postimg}>
                    <Image
                      src={item.imgsrc || '/ogcanwebe.webp'}
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
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const jsondata = await getColData('blogs', true)
  const data = await JSON.parse(JSON.stringify(jsondata))
  return {
    props: { data },
  }
}
