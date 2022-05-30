import { serialize } from 'next-mdx-remote/serialize'
import styles from '../../styles/Blogs.module.css'
import { MDXRemote } from 'next-mdx-remote'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { addMessageForms, getColData } from '../../helpers'
import { blogPosts } from '../../data/data'
import moment from 'moment'

export default function Blogs({ data }) {
  return (
    <>
      <div className='sectionbody'>
        <div className='wrapper'>
          <h1 className='pageHeader'>Blogs.</h1>
          <p className='mt'>On Maintenance , Visit After Some Time</p>
          {/* <h3 className='header'>All Posts</h3>
          <div className={styles.blogWrapper}>
            {data.map((item, i) => (
              <Link href={`/blogs/${item.slug}`} key={i}>
                <a className={styles.postCard}>
                  <div className={styles.postimg}>
                    <Image
                      src='/ogcanwebe.webp'
                      layout='fill'
                      objectFit='cover'
                      alt='blog image'
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
          </div>*/}
        </div>
      </div>
    </>
  )
}

// export async function getStaticProps() {
//   const jsondata = await getColData('blogs')
//   const data = await JSON.parse(JSON.stringify(jsondata))
//   return {
//     props: { data },
//   }
// }
