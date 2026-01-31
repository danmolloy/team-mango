'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function FooterBranding() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    margin: '-20% 0px',
    once: true
  })

  return (
    <div
      ref={ref}
      className="-z-10 h-34 overflow-hidden fixed bottom-0 w-full bg-dark text-light"
    >
      <motion.p
        initial={{ y: 120, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="text-center text-[clamp(4rem,20vw,14rem)] sm:-mt-24 lg:-mt-32 font-display"
      >
        mango
      </motion.p>
    </div>
  )
}