'use client'
import Link from "next/link"


export default function Menu(props: {
  closeMenu: () => void
}) {
  const { closeMenu } = props

  return (
    <div className="flex flex-col justify-evenly w-screen h-screen text-xl text-center bg-dark fixed top-12 right-0 text-light">
                <Link onClick={() => setTimeout(() => closeMenu(), 250)} href="/#services" className="hover:underline mx-1 p-2 py-4 ">SERVICES</Link>
        <Link onClick={() => setTimeout(() => closeMenu(), 250)} href="/#why-us" className="hover:underline mx-1 p-2 py-4 ">WHY MANGO</Link>
        <Link onClick={() => setTimeout(() => closeMenu(), 250)} href="/#about" className="hover:underline mx-1 p-2 py-4 ">ABOUT</Link>
        <Link onClick={() => setTimeout(() => closeMenu(), 250)} href="/#work" className="hover:underline mx-1 p-2 py-4 ">SELECTED WORK</Link>

        <Link onClick={() => setTimeout(() => closeMenu(), 250)} href="/#contact" className="hover:underline mx-1 p-2 py-4 ">CONTACT</Link>
    </div>
  )
}