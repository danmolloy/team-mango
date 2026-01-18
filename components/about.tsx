import { ViewportFrame } from "./frame";

export default function About() {
  return (
    <section id="about" className="p-4 relative pt-12 flex flex-col min-h-[75vh] pb-32 bg-neutral-900 text-light overflow-hidden">

      <h2 className="self-center z-10 font-medium text-6xl  w-screen border-y border-y-neutral-700 text-center leading-12">ABOUT US</h2>
    <div className="flex flex-col items-center md:items-end md:mr-2">
    <ViewportFrame color="bg-neutral-700">
      <div className="border-2 rounded-md items-center  py-8 lg:py-16 pt-8 bg-neutral-100 text-black flex  flex-col   md:self-end">

      <p className="py-4  text-sm font-medium w-full px-2  md:w-2/3  ">Team Mango is a small software studio based in Brisbane.</p>
      <p className="py-4 text-sm font-medium w-full px-2  md:w-2/3  ">We design build custom digital products for small to medium organisations, and also develop our own in-house projects alongside client work.</p>
      <p className="py-4 text-sm font-medium w-full px-2  md:w-2/3  ">We approach projects carefully and collaboratively, focusing on clarity, reliability, and systems that continue to work well over time. Being intentionally small means clients work directly with the person designing and building their software.</p>
      </div></ViewportFrame></div>
    </section>
  )
}