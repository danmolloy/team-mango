import {
  LuPuzzle,
  LuLayoutDashboard,
  LuCloud,
  LuSmartphone,
  LuGlobe
} from "react-icons/lu";


const servicesArr = [
  {
    title: "Custom software development",
    text: "Team Mango designs and builds bespoke systems tailored to the needs of each organisation.",
    icon: <LuPuzzle />
  },
  {
    title: "Web apps & internal systems",
    text: "We build web-based systems that replace fragile spreadsheets, manual processes or inherited tools.",
    icon: <LuLayoutDashboard />
  },
  {
    title: "Web Development",
    text: "We design, build and maintain websites for individual and organisations, including marketing sites and online stores. Projects focus on design, clarity and performance.",
    icon: <LuGlobe />
  },
  {
    title: "Mobile app development",
    text: "We design and develop for iOS and Android, taking projects from conception through to deployment and continued maintenance.",
    icon: <LuSmartphone />
  },
  {
    title: "SaaS products",
    text: "We help organisations design and build software-as-a-service products, from initial planning to production-ready systems.",
    icon: <LuCloud />
  },
]

export default function Services() { 

  return ( 
    <section id="services" className="min-h-screen relative w-screen bg-[#F6CD45] text-[#1D1D1D] pt-12 p-4 flex flex-col pb-12 "> 
      <h2 className="self-center font-semibold text-6xl   text-center ">SERVICES</h2> 
      <div className="flex flex-col relative lg:flex-row lg:items-center lg:justify-evenly mt-8">

<ul className="flex flex-col md:flex-row flex-wrap justify-center ">
      {servicesArr.map((i, ind) => ( 
        <li key={ind} className="bg-[#F4F1E0] text-[#1D1D1D] md:w-2/5 md:min-h-[20vh] p-4 m-2 rounded-lg border-3 shadow">
          <div className="flex flex-col  ">
          <p className="text-2xl ">{i.icon}</p>

          <h3 className="font-medium text-xl py-2">{i.title.toUpperCase()}</h3>
          </div>
          <p className=" font-medium">{i.text}</p>
      </li> 
    ))} 
    </ul> 
   
    </div>
    </section> 
    ) 
  }