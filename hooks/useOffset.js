import { useState, useEffect } from 'react'

export default function useOffset() {
  const [offsetY, setOffsetY] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return offsetY
}
