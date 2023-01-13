import Image from 'next/image'
import Link from 'next/link'
import laptop from '../../public/assets/laptop.png'

import styles from '../../styles/Projects.module.css'
export default function Featured({ data }) {
  const btn = {
    live: 'Visit live',
    youtube: 'Watch on Youtube',
    github: 'View on Github',
  }
  return (
    <section className={styles.featured}>
      <div className={styles.featuredWrapper}>
        <div className={styles.featuredLeft}>
          {/* <img
            className={styles.laptop}
            src="/assets/laptop.png"
            alt="laptop"
          /> */}
          <Image
            className={styles.laptop}
            src={laptop}
            alt="laptop"
            placeholder="blur"
          />
          {data.embed ? (
            <iframe
              src={data.embed}
              title={data.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <Image
              src={data.imgsrc}
              alt={data.name}
              width={800}
              height={480}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRvQDAABXRUJQVlA4WAoAAAAUAAAAMQAAJQAAQUxQSIwAAAABcGvbtumci9hOKttGa1R2cu/7/9/wO2WqiJgA+GOmhUa93jBa5vY5x8lkPGYwPvYi6CRWLTDaQVGWa6YKcACgKLreYgwAIHVqoelxUHt2yiODpcvB3Q2TiRTy4ENDBsqi/hZCyDklOFj2JX8fof6UkcSOitRVrsk2hlF7aXTVHSGg1U7LcLvB7fvnBVZQOCAsAAAAUAMAnQEqMgAmAD6RSKBMJaQjIiKoALASCWkAABPxjh8IRYAA/vjO9XgAAABYTVAgDgMAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRDBBMjY3OTI2OTMxMUU0OUU2NkQ1MjA2NjBFQkNFNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRDBBMjY3QTI2OTMxMUU0OUU2NkQ1MjA2NjBFQkNFNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNEMEEyNjc3MjY5MzExRTQ5RTY2RDUyMDY2MEVCQ0U3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNEMEEyNjc4MjY5MzExRTQ5RTY2RDUyMDY2MEVCQ0U3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+"
            />
          )}
        </div>
        <div className={styles.featuredRight}>
          <p className={styles.featuredName}>{data.name}</p>
          <p className={styles.featuredInfo}>{data.info}</p>
          <div className={styles.btnWrapper}>
            <Link href={`/products/${data.id}`} className={styles.featuredBtn}>
              View
            </Link>
            {data.links.map((item, i) => (
              <a
                key={i}
                className={styles[item.name]}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {btn[item.name]}
              </a>
            ))}
          </div>

          <ul className={styles.list}>
            {data.points.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
