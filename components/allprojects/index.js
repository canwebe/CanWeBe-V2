import styles from '../../styles/Projects.module.css'
import Link from 'next/link'
export default function AllProjects() {
  return (
    <section className={styles.allProjects}>
      <h3 className='header'>All Projects</h3>
      <div className={styles.allProjectWrapper}>
        {[...Array(17)].map((item) => (
          <div className={styles.allProjectCard} key={item}>
            <p className={styles.allProjectName}>Silent Share</p>
            <p className={styles.allProjectInfo}>
              {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur est minima blanditiis temporibus, consequuntur perspiciatis natus ullam reprehenderit ipsam illum! Quasi vel molestias culpa magnam pariatur! Amet obcaecati soluta voluptatu'.substring(
                0,
                60
              ) + '....'}
            </p>
            <Link href='/'>
              <a className={styles.allProjectBtn}>view</a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
