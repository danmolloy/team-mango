import Link from "next/link";

export default function Header() {
  return (
    <div className="border-b text-black  z-20 h-12 w-screen  fixed flex flex-row items-center justify-between px-4 backdrop-blur-xs">
      <p className="font-medium text-sm ">TEAM MANGO</p>
      <div className="text-[10px] h-10  font-bold flex flex-col justify-evenly items-start text-primary flex-wrap">
                <Link href="/#services" className="hover:underline mx-1">.services</Link>
        <Link href="/#why-us" className="hover:underline mx-1">.why mango</Link>
        <Link href="/#about" className="hover:underline mx-1">.about</Link>

        <Link href="/#contact" className="hover:underline mx-1">.contact</Link>
      </div>
    </div>
  )
}