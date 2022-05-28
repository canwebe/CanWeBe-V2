import SocialBtn from '../socialBtn'
import styles from './teamList.module.css'
import Image from 'next/image'

export default function TeamList({ teamData }) {
  return (
    <div className={styles.cardWrapper}>
      {teamData.map((item, i) => (
        <div className={styles.card} key={i}>
          <div className={styles.leftSide}>
            <div className={styles.avatar}>
              <Image
                className={styles.img}
                src={item.img}
                alt={item.name + ' avatar'}
                width={100}
                height={100}
                placeholder='blur'
                blurDataURL='/assets/avatar.webp'
                layout='responsive'
              />
            </div>
            <div className={styles.socialWrapper}>
              {item.social.map((item, i) => (
                <SocialBtn key={i} type={item.name} link={item.link} />
              ))}
            </div>
          </div>
          <div className={styles.rightSide}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.designation}>{item.position}</p>
            <p className={styles.info}>{item.info}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
