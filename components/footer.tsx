'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)

  const isInView = useInView(ref, {
    margin: '-20% 0px',
    once: true
  })

  return (
    <footer className="flex flex-col bg-dark text-light">
      {/* Footer meta */}
      <div className="font-mono font-medium text-sm text-center pt-4">
        <p>© 2026 Team Mango Pty Ltd</p>
        <p>ABN 51 694 233 639</p>
        <p>Meanjin/Brisbane, Australia</p>
      </div>

      {/* Branding reveal */}
      <div
        ref={ref}
        className="relative overflow-hidden h-20 sm:h-28  lg:h-32 w-full"
      >
        <motion.p
          initial={{ y: 120, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute inset-x-0 bottom-0 text-center text-[clamp(4rem,20vw,14rem)] font-display leading-none"
        >
          mango
        </motion.p>
      </div>
    </footer>
  )
}