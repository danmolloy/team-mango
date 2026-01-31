'use client'
import Link from "next/link"
import { motion } from 'motion/react'


export default function Menu(props: {
  closeMenu: () => void
}) {
  const { closeMenu } = props

  return (
    <div className="flex flex-col justify-evenly w-screen h-screen text-xl text-center bg-dark fixed top-12 right-0 text-light pb-20">
                <Link onClick={() => setTimeout(() => closeMenu(), 250)} href="/#services" className="hover:underline mx-1 p-2  font-medium">
                <motion.p initial={{ letterSpacing: "0px" }}
  animate={{ letterSpacing: "-1.5px" }}
  transition={{
    duration: 0.25,
    ease: "easeOut"
  }}>SERVICES</motion.p></Link>
        <Link onClick={() => setTimeout(() => closeMenu(), 250)} href="/#why-us" className="hover:underline mx-1 p-2 font-medium"><motion.p initial={{ letterSpacing: "0px" }}
  animate={{ letterSpacing: "-1.5px" }}
  transition={{
    duration: 0.5,
    ease: "easeOut"
  }}>WHY MANGO</motion.p></Link>
        <Link onClick={() => setTimeout(() => closeMenu(), 250)} href="/#about" className="hover:underline mx-1 p-2 font-medium"><motion.p initial={{ letterSpacing: "0px" }}
  animate={{ letterSpacing: "-1.5px" }}
  transition={{
    duration: 0.75,
    ease: "easeOut"
  }}>ABOUT</motion.p></Link>
        <Link onClick={() => setTimeout(() => closeMenu(), 250)} href="/#work" className="hover:underline mx-1 p-2 font-medium"><motion.p initial={{ letterSpacing: "0px" }}
  animate={{ letterSpacing: "-1.5px" }}
  transition={{
    duration: 1,
    ease: "easeOut"
  }}>SELECTED WORK</motion.p></Link>

        <Link onClick={() => setTimeout(() => closeMenu(), 250)} href="/#contact" className="hover:underline mx-1 p-2 font-medium"><motion.p initial={{ letterSpacing: "0px" }}
  animate={{ letterSpacing: "-1.5px" }}
  transition={{
    duration: 1.25,
    ease: "easeOut"
  }}>CONTACT</motion.p></Link>
    </div>
  )
}