import styles from '../../styles/Projects.module.css'
import Link from 'next/link'
export default function AllProjects({ data }) {
  return (
    <section className={styles.allProjects}>
      <h3 className='header'>All Projects</h3>
      <div className={styles.allProjectWrapper}>
        {data.map((item) => (
          <div className={styles.allProjectCard} key={item.id}>
            <p className={styles.allProjectName}>{item.name}</p>
            <p className={styles.allProjectInfo}>
              {item.info.substring(0, 60) + '....'}
            </p>
            <Link href={`/projects/${item.id}`}>
              <a className={styles.allProjectBtn}>view</a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
