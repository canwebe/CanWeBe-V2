import styles from '../../styles/ProjectInfo.module.css'
export default function Contributor({ data }) {
  return (
    <div className={styles.contributorSection}>
      <h3 className={styles.header}>Contributors</h3>
      <div className={styles.contributorWrapper}>
        {data.map((item, i) => (
          <div className={styles.contributorCard} key={i}>
            <p
              className={`${styles.contributorName} ${
                item?.lead ? 'lead' : ''
              }`}
            >
              {item.name} {item?.lead && ' (LEAD)'}
            </p>
            <ul className={styles.list}>
              {item.work.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
