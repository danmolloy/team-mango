import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import SelectedWork from "@/components/selectedWork";
import Services from "@/components/services";
import WhyUs from "@/components/whyUs";

export default function Home() {
  return (
    <div className=" flex flex-col items-center font-sans text-dark bg-white overflow-x-hidden w-screen">
      <Hero />

      <Services />
      <WhyUs />
      <About />
      <SelectedWork />
      <Contact />
    </div>
  );
}
