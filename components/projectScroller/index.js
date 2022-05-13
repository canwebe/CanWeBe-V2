import { useEffect } from 'react'
import { getProjectList } from '../../helpers'
import ProjectBtn from '../projectBtn'
import styles from './projectScroll.module.css'
import Image from 'next/image'
export default function ProjectScroll({ data }) {
  console.log(data)
  // useEffect(() => {
  //   const handleData = async () => {
  //     const dta = await getProjectList()
  //     console.log(dta)
  //   }
  //   handleData()
  // })
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
            <video
              width='100%'
              height='120px'
              src={item.youtube}
              frameBorder='0'
              allowFullScreen
            ></video>
          )}

          <div className={styles.content}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.info}>{item.info}</p>
            <div className={styles.btnDiv}>
              <ProjectBtn type='view' />
              <ProjectBtn small type='youtube' />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
