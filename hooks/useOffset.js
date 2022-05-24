import { useState, useEffect, useCallback } from 'react'

export default function useOffset() {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => document.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return scrollY
}
