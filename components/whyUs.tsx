
import { LuLayoutDashboard,  LuShieldCheck, LuUserCheck, LuLock } from "react-icons/lu";

const whyUsArr = [
  {
    title: "Clear, intuitive systems",
    text: "We design software that feels understandable and considered. Interfaces are shaped around real workflows, not abstract feature lists.",
    icon: <LuLayoutDashboard />,
  },
/*   {
    title: "Careful collaboration",
    text: "We work closely with clients to understand their needs before building anything. Projects are approached thoughtfully, with decisions made together and assumptions kept to a minimum.",
    icon: <LuUsers />
  }, */
  {
    title: "Reliability and longevity",
    text: "Our focus is on systems that continue to work well after launch. Software is built in manageable stages, delivered with clear documentation, and designed to be maintained over time.",
    icon: <LuShieldCheck />
  },
  {
    title: "Direct support",
    text: "Being intentionally small means you work directly with the person designing and building your system. Support is personal, responsive, and informed by a deep understanding of the work.",
    icon: <LuUserCheck />
  },
 /*  {
    title: "Local context",
    text: "Based in Brisbane, we understand local organisations, time zones, and expectations — and we’re available when needed.",
    icon: <LuMapPin/>
  }, */
  {
    title: "Security and care",
    text: "We take security and data protection seriously, building systems with sensible safeguards and attention to detail from the outset.",
    icon: <LuLock />
  }
]

export default function WhyUs() {
  return (
    <section id="why-us" className="p-4 pt-12 flex flex-col items-center min-h-[75vh] pb-16 bg-light text-dark">
      <h2 className="self-center font-bold text-6xl text-center tracking-[-4px]">WHY TEAM MANGO</h2>
      <ul className="flex flex-col items-center justify-center my-8 ">
        {whyUsArr.map((i, ind) => (
          <li key={ind} className={`flex flex-col lg:flex-row px-2 items-start lg:items-center lg:min-h-40 py-4 justify-evenly  w-full  border-b-2 ${ind === 0 && 'border-t-2'} border-dark`}>
            <p className="text-2xl text-contrast">{i.icon}</p>
            <p className="font-medium text-2xl lg:w-1/3 py-2">{i.title.toUpperCase()}</p>
             <p className="text-md font-base font-sans  lg:w-1/3">{i.text}</p>
           </li>
        ))}
      </ul>
{/*       <p className="text-center">We take on a small number of projects at a time to ensure each receives proper attention and care.</p>
 */}    </section>
  )
}