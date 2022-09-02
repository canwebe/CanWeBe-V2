import SocialBtn from '../socialBtn'
import styles from './teamList.module.css'
import Image from 'next/image'
import SeeAllBtn from '../seeAllBtn'
import TeamCard from '../teamCard'

export default function TeamList({ teamData }) {
  return (
    <div className='wrapper'>
      <div className={styles.cardWrapper}>
        {teamData.map((item, i) => (
          <TeamCard
            key={i}
            name={item.name}
            img={item.img}
            social={item.social}
            position={item.position}
            info={item.info}
          />
        ))}
      </div>
    </div>
  )
}
