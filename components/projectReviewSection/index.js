import styles from '../../styles/ProjectInfo.module.css'

export default function ProjectReviewSection({ data }) {
  return (
    <div className={styles.projectReviewSection}>
      <h3 className={styles.header}>Reviews</h3>
      <div className={styles.giveReview}>
        <p className={styles.giveReviewP}>Want us to give review</p>
        <a
          className={styles.giveReviewBtn}
          href='https://xtrvl3ys9ze.typeform.com/to/jGwX9FWH'
          target='_blank'
          rel='noopener noreferrer'
        >
          Give Review
        </a>
      </div>
      {data.length && (
        <div className={styles.reviewWrapper}>
          {data.map((item, i) => (
            <div key={i} className={styles.reviewCard}>
              <p className={styles.review}>{item.message}</p>
              <p className={styles.username}>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
