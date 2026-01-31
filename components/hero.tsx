'use client'
import { motion, useScroll, useTransform } from 'motion/react'
/* 
primary: #f95700
light: #FFF9ED
secondary: #ffd46e
contrast: #2789df
dark: #1e1e1e
*/


export default function Hero() {
  const { scrollY } = useScroll()

  const headingColor = useTransform(
    scrollY,
    [100, 275],
    ['#f95700', '#FFF9ED']
  )
  const blurbColor = useTransform(
    scrollY,
    [175, 375],
    ['#1e1e1e', '#FFF9ED']
  )
  return (
    <section className=" z-0  h-screen w-screen flex  flex-col items-center justify-center p-4 font-sans bg-light">
      <motion.h1 style={{ color: headingColor }} className="font-display text-6xl md:text-8xl -mt-24 ">Team Mango</motion.h1>
      
     <motion.p style={{ color: blurbColor}} className=" text-xl md:text-2xl tracking-ti lg:w-2/3 lg:text-center font-semibold mt-12">
      We build reliable software systems that help organisations work more efficiently and sustainably.
    </motion.p>
  
    </section>   
  )
}