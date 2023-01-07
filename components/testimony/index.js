import styles from './testimony.module.css'
import Carausal from '../carausal/carousel'
import CarauselItem from '../carausal/carouselItem'
import Review from '../carausal/review'
import TestimonySVG from '../svg/testimonySVG'

export default function Testimony({ data }) {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        <div className={styles.svg}>
          <TestimonySVG />
        </div>

        <p className={styles.subheader}>What other people think about us !</p>
        <Carausal>
          {data.map((item, i) => (
            <CarauselItem key={i} index={i}>
              <Review name={item.name}>{item.review}</Review>
            </CarauselItem>
          ))}
        </Carausal>
      </div>
    </section>
  )
}
