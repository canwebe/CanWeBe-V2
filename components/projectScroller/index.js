import { useEffect } from 'react'
import { getProjectList } from '../../helpers'
import ProjectBtn from '../projectBtn'
import styles from './projectScroll.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

export default function ProjectScroll({ data }) {
  const renderBtn = (type, links) => {
    if (type === 'liveyoutube') {
      return (
        <>
          <ProjectBtn type='view' link={links.live} />
          <ProjectBtn small type='youtube' link={links.youtube} />
        </>
      )
    } else if (type === 'livegithub') {
      return (
        <>
          <ProjectBtn type='view' link={links.live} />
          <ProjectBtn small type='github' link={links.github} />
        </>
      )
    } else if (type === 'youtubegithub') {
      return (
        <>
          <ProjectBtn type='youtube' link={links.youtube} />
          <ProjectBtn small type='github' link={links.github} />
        </>
      )
    } else if (type === 'youtube') {
      return (
        <>
          <ProjectBtn type='youtube' link={links.youtube} />
        </>
      )
    } else if (type === 'fb') {
      return (
        <>
          <ProjectBtn type='fb' link={links.fb} />
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
              alt='project image'
              className={styles.img}
              width='200px'
              height='120px'
              layout='responsive'
            />
          ) : (
            <iframe
              width='100%'
              height='170px'
              src={item.embed}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
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
      <div className={styles.seeMoreDiv}>
        <Link href='/projects'>
          <a className={styles.seeMoreBtn}>
            <FaChevronRight className={styles.btnSvg} />
            See All
          </a>
        </Link>
      </div>
    </div>
  )
}
