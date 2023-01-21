import styles from '../../styles/ProjectInfo.module.css'
import Link from 'next/link'

export default function ProjectReviewSection({ reviews, name }) {
  return (
    <div className={styles.projectReviewSection}>
      <h3 className={styles.header}>Reviews</h3>
      <div className={styles.giveReview}>
        <p className={styles.giveReviewP}>Want us to give review</p>
        <Link
          href={{
            pathname: '/form/review',
            query: { project: name.toLowerCase() },
          }}
          className={styles.giveReviewBtn}
        >
          Give Review
        </Link>
      </div>
      {reviews?.length ? (
        <div className={styles.reviewWrapper}>
          {reviews.map((item, i) => (
            <div key={i} className={styles.reviewCard}>
              <p className={styles.review}>{item.message}</p>
              <p className={styles.username}>{item.name}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
