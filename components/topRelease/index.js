import styles from '../../styles/Projects.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function TopRelease() {
  return (
    <section className={styles.topRelease}>
      <h3 className='header'>Top Projects</h3>
      <div className={styles.topReleaseWrapper}>
        {[...Array(7)].map((item) => (
          <div key={item} className={styles.topReleaseCard}>
            <div className={styles.topReleaseImg}>
              <Image
                src='/ogcanwebe.webp'
                width={800}
                height={480}
                layout='responsive'
                alt='imah'
              />
            </div>
            <p className={styles.topReleaseName}>SilentShare</p>
            <p className={styles.topReleaseInfo}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              tempora magni cum ipsum dolores in ab provident
            </p>
            <Link href='/'>
              <a className={styles.topReleaseBtn}>View</a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
