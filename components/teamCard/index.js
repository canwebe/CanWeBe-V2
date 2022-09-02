import Image from 'next/image'
import SocialBtn from '../socialBtn'
import styles from './teamCard.module.css'

export default function TeamCard({
  name,
  img,
  social,
  position,
  info,
  vertical,
}) {
  return (
    <div className={`${styles.card} ${vertical ? 'vertical' : ''}`}>
      <div className={styles.leftSide}>
        <div className={styles.avatar}>
          <Image
            className={styles.img}
            src={img}
            alt={name + ' avatar'}
            width={100}
            height={100}
            placeholder='blur'
            blurDataURL='/assets/avatar.webp'
            layout='responsive'
          />
        </div>
        <div className={styles.socialWrapper}>
          {social.map((item, i) => (
            <SocialBtn
              key={i}
              type={item.name}
              link={item.link}
              large={vertical}
            />
          ))}
        </div>
      </div>
      <div className={styles.rightSide}>
        <p className={styles.name}>{name}</p>
        <p className={styles.designation}>{position}</p>
        <p className={styles.info}>{info}</p>
      </div>
    </div>
  )
}
