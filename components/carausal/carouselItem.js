import { useContext, useCallback } from 'react'
import { CarausalContext } from './carousel'
import styles from '../../styles/carausal.module.css'

export default function CarauselItem({ children, index }) {
  const { embla, selectedIndex } = useContext(CarausalContext)
  const isActive = selectedIndex === index
  const handleClick = useCallback(() => {
    if (embla === undefined) return
    embla.scrollTo(index)
  }, [embla, index])
  return (
    <div
      className={`${styles.slide} ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}
