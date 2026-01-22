/* 
orange: #EB5027
light: #F4F1E0
yellow: #F6CD45
blue:
dark: #1D1D1D
*/
export default function Hero() {
  return (
    <section className=" z-0  h-screen w-screen flex  flex-col items-center justify-center p-4 font-sans bg-[#fffaea]">
      <h1 className="font-display text-6xl md:text-8xl -mt-24 text-[#ff6600]">Team Mango</h1>
      
     <p className="text-dark text-xl md:text-2xl lg:w-2/3 lg:text-center font-semibold mt-12">
      We build reliable software systems that help organisations work more efficiently and sustainably.
    </p>
  
    </section>   
  )
}