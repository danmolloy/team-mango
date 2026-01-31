'use client'
import { motion, useScroll, useTransform } from 'motion/react'


export default function FooterBrandingMob() {
  const { scrollY } = useScroll();

  // Adjust these numbers to taste
   const y = useTransform(scrollY, [5000, 5175], [100, 0], {
    clamp: true
  });

  return (
    <div className="sm:hidden -z-10 h-34 overflow-hidden fixed bottom-0 w-full bg-dark text-light">
      <motion.p
        style={{ y }}
        className="text-center text-[clamp(4rem,20vw,14rem)]  sm:-mt-24 lg:-mt-32 font-display"
      >
       mango
      </motion.p>
    </div>
  );
}