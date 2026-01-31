'use client'
import { motion, useScroll, useTransform } from 'motion/react'


export default function FooterBrandingLG() {
  const { scrollY } = useScroll();

  // Adjust these numbers to taste
   const y = useTransform(scrollY, [4150, 4275], [200, 40], {
    clamp: true
  });

  return (
    <div className="-z-10 hidden lg:inline fixed   overflow-hidden  bottom-0 w-full bg-dark text-light">
      <motion.p
        style={{ y }}
        className="text-center text-[clamp(4rem,20vw,14rem)] font-display"
      >
       mango
      </motion.p>
    </div>
  );
}