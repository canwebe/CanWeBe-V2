import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'
import styles from '../../styles/carausal.module.css'
import { useCallback, useState, useEffect, createContext } from 'react'

export const CarausalContext = createContext({
  embla: undefined,
  selectedIndex: -1,
})

export default function Carausal({ children }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
    },
    [ClassNames(), Autoplay()]
  )

  const handleSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    handleSelect()
    emblaApi.on('select', handleSelect)
  }, [emblaApi, handleSelect])

  return (
    <CarausalContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>{children}</div>
      </div>
    </CarausalContext.Provider>
  )
}
