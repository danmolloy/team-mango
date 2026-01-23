import MenuIcon from "./menuIcon";

export default function Header() {
  return (
    <div className=" text-primary  z-20 h-12 w-screen  fixed flex flex-row items-center justify-between px-4 bg-light">
      <p className="font-display text-sm ">Team Mango</p>
      <MenuIcon />
    </div>
  )
}