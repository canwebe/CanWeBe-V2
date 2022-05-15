import { testimonyData } from '../../data/data'
import styles from './testimonyGrid.module.css'

export default function TestimonyGrid() {
  return (
    <div className={styles.grid}>
      {testimonyData.map((item, i) => (
        <article key={i} className={styles.testimonial}>
          <h2 className={styles.name}>{item.name}</h2>
          <p className={styles.quote}>“ {item.quote} ”</p>
        </article>
      ))}
    </div>
  )
}
