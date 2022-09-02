import SeeAllBtn from '../seeAllBtn'
import TeamCard from '../teamCard'
import styles from './scroller.module.css'

export default function TeamListScroller({ teamData }) {
  return (
    <div className={styles.scroller}>
      {teamData.map((item, i) => (
        <TeamCard
          key={i}
          name={item.name}
          img={item.img}
          social={item.social}
          position={item.position}
          info={item.info}
          vertical={true}
        />
      ))}
      <SeeAllBtn name='team' />
    </div>
  )
}
