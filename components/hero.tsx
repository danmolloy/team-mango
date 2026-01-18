import { ViewportFrame } from "./frame";

export default function Hero() {
  return (
    <section className=" z-0 relative h-screen w-screen flex overflow-hidden flex-col items-center justify-center p-4 font-sans bg-white dotted-bg">
      <h1 className=" text-wrap text-8xl md:text-[124px] text-dark -mt-32 text-center leading-23 z-20 border-y border-y-neutral-200 w-screen ">TEAM MANGO</h1>
<ViewportFrame>
  {/* the card */}
  <div className="relative p-4 md:p-8 bg-neutral-50 border-[1.5px] border-black rounded-lg   flex flex-col items-center justify-center">
    <p className="text-sm  text-black font-base">
      We build reliable software systems that help organisations work more efficiently and sustainably.
    </p>
  </div>
</ViewportFrame>      {/* <LuCircleChevronDown size="24" className="absolute bottom-12 text-primary"/> */}
    </section>
  )
}