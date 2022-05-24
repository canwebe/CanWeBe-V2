import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Projects.module.css'
export default function Featured() {
  return (
    <section className={styles.featured}>
      <h3 className='header'>Featured</h3>
      <div className={styles.featuredWrapper}>
        <div className={styles.featuredLeft}>
          <Image
            src='/ogcanwebe.webp'
            alt='hahhahh'
            width={800}
            height={480}
            layout='responsive'
          />
        </div>
        <div className={styles.featuredRight}>
          <p className={styles.featuredName}>SilentShare</p>
          <p className={styles.featuredInfo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            molestias unde. Totam itaque quisquam illo iure, cumque assumenda
            cupiditate eaque facilis sequi! Distinctio, atque. Dolores deserunt
            consectetur non excepturi nostrum
          </p>
          <Link href='/'>
            <a className={styles.featuredBtn}>View</a>
          </Link>
        </div>
      </div>
    </section>
  )
}
