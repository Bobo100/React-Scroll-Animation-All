// 隨著滾動，元件會跟著往下移動
import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'

export const SecondComponent = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const { y } = useSpring({
    from: { y: 0 },
    to: { y: scrollY },
    config: { duration: 1000 }
  })

  return (
    <animated.div style={{ transform: y.to(y => `translate3d(0,${y}px,0)`) }}>
      Your Content Here
    </animated.div>
  )
}
