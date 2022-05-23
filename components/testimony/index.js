import styles from './testimony.module.css'
import Carausal from '../carausal/carousel'
import CarauselItem from '../carausal/carouselItem'
import Review from '../carausal/review'
import { testimonyData } from '../../data/data'
import TestimonySVG from '../svg/testimonySVG'

export default function Testimony() {
  return (
    <section className={styles.section}>
      <div className='wrapper'>
        <h1 className={styles.header}>Testimony</h1>
        <div className={styles.svg}>
          <TestimonySVG />
        </div>

        <p className={styles.subheader}>What other people think about us !</p>
        <Carausal>
          {testimonyData.map((item, i) => (
            <CarauselItem key={i} index={i}>
              <Review name={item.name}>{item.quote}</Review>
            </CarauselItem>
          ))}
        </Carausal>
      </div>
    </section>
  )
}
