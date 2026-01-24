'use client'
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import Menu from "./menu";

export default function MenuIcon() {
  const [showMenu, setShowMenu] = useState(false)
   return (
    <div className="relative">
    <button onClick={() => setShowMenu(!showMenu)} className="text-dark text-2xl cursor-pointer  hover:text-red-600  p-0.5 m-1 rounded-full">
      {showMenu ? <LuX />: <LuMenu />}
    </button> 
    {showMenu && <Menu closeMenu={() => setShowMenu(false)} />}
    </div>
  )
}