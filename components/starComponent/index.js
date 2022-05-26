import styles from './star.module.css'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
export default function StarComponent({ handleStar, rating }) {
  const [hover, setHover] = useState(null)
  return (
    <div>
      {[...Array(5)].map((item, i) => (
        <label
          key={i}
          onMouseOver={() => setHover(i + 1)}
          onMouseOut={() => setHover(null)}
        >
          <input
            className={styles.input}
            type='radio'
            name='rating'
            value={rating}
            onClick={() => handleStar(i + 1)}
          />

          <FaStar
            className={`${styles.star} ${i + 1 <= rating ? 'color' : ''} ${
              i + 1 <= hover ? 'hover' : ''
            }`}
          />
        </label>
      ))}
    </div>
  )
}
