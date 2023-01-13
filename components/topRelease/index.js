import styles from '../../styles/Projects.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function TopRelease({ data }) {
  return (
    <section className={styles.topRelease}>
      <div className="wrapper">
        <h3 className={styles.topReleaseH3}>Top Products</h3>
        <div className={styles.topReleaseWrapper}>
          {data.map((item, i) => (
            <div key={i} className={styles.topReleaseCard}>
              <div className={styles.topReleaseImg}>
                <Image
                  src={item.imgsrc}
                  fill
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRvQDAABXRUJQVlA4WAoAAAAUAAAAMQAAJQAAQUxQSIwAAAABcGvbtumci9hOKttGa1R2cu/7/9/wO2WqiJgA+GOmhUa93jBa5vY5x8lkPGYwPvYi6CRWLTDaQVGWa6YKcACgKLreYgwAIHVqoelxUHt2yiODpcvB3Q2TiRTy4ENDBsqi/hZCyDklOFj2JX8fof6UkcSOitRVrsk2hlF7aXTVHSGg1U7LcLvB7fvnBVZQOCAsAAAAUAMAnQEqMgAmAD6RSKBMJaQjIiKoALASCWkAABPxjh8IRYAA/vjO9XgAAABYTVAgDgMAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRDBBMjY3OTI2OTMxMUU0OUU2NkQ1MjA2NjBFQkNFNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRDBBMjY3QTI2OTMxMUU0OUU2NkQ1MjA2NjBFQkNFNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNEMEEyNjc3MjY5MzExRTQ5RTY2RDUyMDY2MEVCQ0U3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNEMEEyNjc4MjY5MzExRTQ5RTY2RDUyMDY2MEVCQ0U3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+"
                  alt="Project Img"
                />
              </div>
              <div className={styles.topReleaseContent}>
                <p className={styles.topReleaseName}>{item.name}</p>
                <p className={styles.topReleaseInfo}>
                  {item.info.substring(0, 60) + '...'}
                </p>
                <Link
                  href={`/products/${item.id}`}
                  className={styles.topReleaseBtn}
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
