import styles from '../../styles/Projects.module.css'
import Link from 'next/link'
export default function AllProjects({ data }) {
  return (
    <section className={styles.allProjects}>
      <h2>Some of our Products</h2>
      <p>Stay tuned with CWB other products are yet to come</p>
      <div className={styles.allProjectWrapper}>
        {data.map((item) => (
          <Link
            key={item.id}
            href={`/products/${item.id}`}
            className={styles.allProjectName}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
