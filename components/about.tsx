
export default function About() {
  return (
    <section id="about" className="p-4 relative pt-12 flex w-screen flex-col min-h-[75vh] pb-32 bg-secondary text-dark overflow-hidden">

      <h2 className="self-center z-10 font-semibold text-6xl  tracking-[-5px] text-center ">ABOUT US</h2>
    <div className="flex flex-col items-center md:items-end md:mr-2 lg:w-2/3 lg:self-center mt-8 text-dark">
      <div className=" rounded-md items-center  py-8 lg:py-16 pt-8  flex border shadow bg-light flex-col   md:self-end">

      <p className="py-4  text-md font-semibold w-full px-2  md:w-2/3  ">Team Mango is a one-person software studio based in Brisbane.</p>
      <p className="py-4 text-md font-semibold w-full px-2  md:w-2/3  ">We design build custom digital products for small to medium organisations, and also develop our own in-house projects alongside client work.</p>
      <p className="py-4 text-md font-semibold w-full px-2  md:w-2/3  ">We approach projects carefully and collaboratively, focusing on clarity, reliability, and systems that continue to work well over time. </p>
      <p className="py-4 text-md font-semibold w-full px-2  md:w-2/3">Being intentionally small means clients work directly with the person designing and building their software.</p>
      </div>
      </div>
    </section>
  )
}