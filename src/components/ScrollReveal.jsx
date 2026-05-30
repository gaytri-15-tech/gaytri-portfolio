import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const ScrollReveal = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className={`transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default ScrollReveal
