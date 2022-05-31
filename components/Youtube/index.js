import styles from './youtube.module.css'

export default function Youtube({ id }) {
  return (
    <div className={styles.container}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow='autoplay; encrypted-media'
        title='Embedded YouTube video'
        className={styles.frame}
      />
    </div>
  )
}
