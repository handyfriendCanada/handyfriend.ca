'use client'

import { useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"


const AnimatedNumbers = ({ value = 0, className = '' }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        // @ts-ignore
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);


  return <span className={className} ref={ref}></span>
}

export default AnimatedNumbers
