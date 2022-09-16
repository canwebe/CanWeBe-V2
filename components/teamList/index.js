import SocialBtn from '../socialBtn'
import styles from './teamList.module.css'
import Image from 'next/image'
import SeeAllBtn from '../seeAllBtn'
import ListTeamCard from './listTeamCard'

export default function TeamList({ teamData }) {
  return (
    <div className="wrapper">
      <div className={styles.cardWrapper}>
        {teamData.map((item, i) => (
          <ListTeamCard
            key={i}
            name={item.name}
            img={item.img}
            social={item.social}
            position={item.position}
          />
        ))}
      </div>
    </div>
  )
}
