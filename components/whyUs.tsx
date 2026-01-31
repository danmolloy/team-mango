'use client'
import { LuLayoutDashboard,  LuShieldCheck, LuUserCheck, LuLock } from "react-icons/lu";
import { motion } from 'motion/react'
const whyUsArr = [
  {
    title: "Clear, intuitive systems",
    text: "Interfaces are shaped around real workflows and designed to feel understandable from the outset.",
    icon: <LuLayoutDashboard />,
  },
/*   {
    title: "Careful collaboration",
    text: "We work closely with clients to understand their needs before building anything. Projects are approached thoughtfully, with decisions made together and assumptions kept to a minimum.",
    icon: <LuUsers />
  }, */
  {
    title: "Reliability and longevity",
    text: "Our focus is on systems you can rely on — built carefully, delivered in stages, and designed to continue working well over time.",
    icon: <LuShieldCheck />
  },
  {
    title: "Direct support",
    text: "You work directly with the person designing and building your system. Support is personal, responsive, and informed by a deep understanding of the work.",
    icon: <LuUserCheck />
  },
 /*  {
    title: "Local context",
    text: "Based in Brisbane, we understand local organisations, time zones, and expectations — and we’re available when needed.",
    icon: <LuMapPin/>
  }, */
  {
    title: "Security and care",
    text: "We take security and data protection seriously, building robust systems with sensible safeguards and attention to detail from the outset.",
    icon: <LuLock />
  }
]
export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="p-4 pt-12 flex flex-col items-center min-h-[75vh] pb-16 bg-light text-dark w-screen"
    >
      <h2 className="self-center font-bold text-6xl text-center tracking-[-5px]">
        WHY TEAM MANGO
      </h2>

      <ul className="flex flex-col items-center justify-center my-8 w-full">
        {whyUsArr.map((i, ind) => (
          <motion.li
            key={ind}
            className="relative flex flex-col lg:flex-row px-2 items-start lg:items-center lg:min-h-40 py-4 justify-evenly w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Top border (only first item) */}
            {ind === 0 && (
              <motion.div
                className="absolute top-0 left-0 h-[2px] w-full bg-dark origin-left"
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1 }
                }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            )}

            {/* Bottom border */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] w-full bg-dark origin-left"
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1 }
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: ind * 0.08 // subtle stagger
              }}
            />

            <p className="text-2xl text-contrast">{i.icon}</p>
            <p className="font-medium text-2xl lg:w-1/3 py-2">
              {i.title.toUpperCase()}
            </p>
            <p className="text-md font-base tracking-tighter font-sans lg:w-1/3">
              {i.text}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}