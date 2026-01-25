'use client'
import Image from "next/image"
import { useState } from "react"

export const projectsArr: {
  id: number
  title: string
  thumb: {
    src: string
      imgWidth: string
      imgHeight: string
      imgAlt: string

  }
  links: {
    website: string
  }
}[] = [
  {
    id: 4,
    title: "Jam Jar",
    thumb: {
      src: "/thumbs/background.png",
      imgWidth: '650',
      imgHeight: '650',
      imgAlt: "Jam Jar landing page"
    },
    links: {
      website: "https://www.jamjar.site/",
    },
    
  },
  {

    thumb: {
      src: "/thumbs/fk-thumb.png",
      imgWidth: '650',
      imgHeight: '650',
      imgAlt: "Fiona Kelly landing page"
    },
    id: 0,
    title: "Fiona Kelly",
    links: {
      website: "https://www.fionakellyflute.com/",
    },
    
  },
  {

    id: 1,
    title: "The Big Firkin Band",
    thumb: {
      src: "/thumbs/firkin-thumb.png",
      imgWidth: '600',
      imgHeight: '600',
      imgAlt: "The Big Firkin Band landing page"
    },
    links: {
      website: 'https://www.thebigfirkinband.com/',
    },
    
    },
  
  {
      id: 3,
      title: "Tuner",
      links: {
        website: "https://apps.apple.com/gb/app/tuner/id6746412805",
      },
     
      thumb: {
      src: "/thumbs/tuner-icon.png",
      imgWidth: '600',
      imgHeight: '600',
      imgAlt: "Tuner app icon"
      }
    }
  ]


export default function SelectedWork() {
  const [selected, setSelected] = useState<null|number>(null);


  return (
    <div id='work' className="flex pt-12 flex-col min-h-screen bg-dark text-light py-8">
            <h2 className="self-center z-10 font-semibold text-6xl tracking-[-5px]  text-center ">SELECTED WORK</h2>


    <div className="flex flex-row flex-wrap justify-evenly w-screen lg:px-32">
      {
        projectsArr.map((i, ind) => (
          <div key={i.id} className="flex hover:underline text-light flex-col sm:w-2/5 w-full m-8 h-auto overflow-hidden max-w-88">
            
          <div className={`cursor-pointer    relative w-full   aspect-square border border-light rounded-sm overflow-hidden bg-dark shadow`}>
           {i.thumb && <Image className={`absolute  transition-all duration-500 ease-in-out hover:scale-105`} fill={true} src={i.thumb?.src} alt={i.thumb.imgAlt}/>}
      </div>
        <p className="font-medium text-lg tracking-[-1.5px] text-center">{i.title.toUpperCase()}</p>
          </div>

        ))
      }
    </div>
    </div>
  )
}