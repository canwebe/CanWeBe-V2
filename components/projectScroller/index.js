import ProjectBtn from '../projectBtn'
import styles from './projectScroll.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import SeeAllBtn from '../seeAllBtn'

export default function ProjectScroll({ data }) {
  const renderBtn = (type, links) => {
    if (type === 'liveyoutube') {
      return (
        <>
          <ProjectBtn type="view" link={links.live} />
          <ProjectBtn small type="youtube" link={links.youtube} />
        </>
      )
    } else if (type === 'livegithub') {
      return (
        <>
          <ProjectBtn type="view" link={links.live} />
          <ProjectBtn small type="github" link={links.github} />
        </>
      )
    } else if (type === 'youtubegithub') {
      return (
        <>
          <ProjectBtn type="youtube" link={links.youtube} />
          <ProjectBtn small type="github" link={links.github} />
        </>
      )
    } else if (type === 'youtube') {
      return (
        <>
          <ProjectBtn type="youtube" link={links.youtube} />
        </>
      )
    } else if (type === 'fb') {
      return (
        <>
          <ProjectBtn type="fb" link={links.fb} />
        </>
      )
    } else {
      return null
    }
  }

  return (
    <div className={styles.scroller}>
      {data.map((item, i) => (
        <div className={styles.card} key={i}>
          {item.imgsrc ? (
            <Image
              src={item.imgsrc}
              alt={item.name + ' image'}
              className={styles.img}
              width="300"
              height="170"
              sizes="(min-width: 1300px) 25vw,(min-width: 1000px) 33vw,
              (min-width: 700px) 50vw,
              90vw"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRvQDAABXRUJQVlA4WAoAAAAUAAAAMQAAJQAAQUxQSIwAAAABcGvbtumci9hOKttGa1R2cu/7/9/wO2WqiJgA+GOmhUa93jBa5vY5x8lkPGYwPvYi6CRWLTDaQVGWa6YKcACgKLreYgwAIHVqoelxUHt2yiODpcvB3Q2TiRTy4ENDBsqi/hZCyDklOFj2JX8fof6UkcSOitRVrsk2hlF7aXTVHSGg1U7LcLvB7fvnBVZQOCAsAAAAUAMAnQEqMgAmAD6RSKBMJaQjIiKoALASCWkAABPxjh8IRYAA/vjO9XgAAABYTVAgDgMAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRDBBMjY3OTI2OTMxMUU0OUU2NkQ1MjA2NjBFQkNFNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRDBBMjY3QTI2OTMxMUU0OUU2NkQ1MjA2NjBFQkNFNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNEMEEyNjc3MjY5MzExRTQ5RTY2RDUyMDY2MEVCQ0U3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNEMEEyNjc4MjY5MzExRTQ5RTY2RDUyMDY2MEVCQ0U3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+"
            />
          ) : (
            <iframe
              width="100%"
              height="170px"
              src={item.embed}
              title={item.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}

          <div className={styles.content}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.info}>{item.info}</p>
            <div className={styles.btnDiv}>
              {renderBtn(item.btn, item.links)}
            </div>
          </div>
        </div>
      ))}
      <SeeAllBtn name="products" />
    </div>
  )
}
