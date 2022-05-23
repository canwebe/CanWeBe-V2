import styles from '../../styles/carausal.module.css'
export default function Review({ children, name }) {
  return (
    <div className={styles.review}>
      <div className={styles.message}>&ldquo; {children} &rdquo;</div>
      <div className={styles.name}>{name}</div>
    </div>
  )
}
