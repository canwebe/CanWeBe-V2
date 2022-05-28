import styles from '../../styles/Projects.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function TopRelease({ data }) {
  return (
    <section className={styles.topRelease}>
      <div className='wrapper'>
        <h3 className={styles.topReleaseH3}>Top Projects</h3>
        <div className={styles.topReleaseWrapper}>
          {data.map((item, i) => (
            <div key={i} className={styles.topReleaseCard}>
              <div className={styles.topReleaseImg}>
                <Image
                  src={item.imgsrc}
                  width={800}
                  height={480}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL='/assets/placeholder.webp'
                  alt='Project Img'
                />
              </div>
              <div className={styles.topReleaseContent}>
                <p className={styles.topReleaseName}>{item.name}</p>
                <p className={styles.topReleaseInfo}>
                  {item.info.substring(0, 60) + '...'}
                </p>
                <Link href={`/projects/${item.id}`}>
                  <a className={styles.topReleaseBtn}>View</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
