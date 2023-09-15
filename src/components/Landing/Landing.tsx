"use client"

import { scroller } from "react-scroll";
import socialMedia from "@/config/socialMedia";
import Button from "../Button/Button";

const Landing = (): JSX.Element => {

  const scrollTo = (section: string) => {
    scroller.scrollTo(section, {
      duration: 500,
      smooth: "easeInOutQuart",
      offset: -100
    })
  }

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col md:flex-row justify-center items-center">
      <div className="relative flex flex-col justify-center items-center">
        <h1 className="text-center font-extrabold text-4xl md:text-6xl bg-clip-text bg-gradient-to-br from-violet-500 to-blue-700 text-transparent p-1">João Pugsley</h1>
        <h2 className="text-center font-light text-xl">Desenvolvedor Web</h2>
        <h2 className="text-center font-light text-xl">Full-Stack</h2>
        <div className="flex flex-row justify-center items-center space-x-4">
          <Button onClick={() => {window.open("https://drive.google.com/u/1/uc?id=1KJZlceI8UwTz2jJrBAd9u85UImsBnnE9&export=download", "_blank")}} className="mt-3">Currículo</Button>
          <Button onClick={() => {scrollTo("projects")}} className="mt-3">Projetos</Button>
        </div>
        <div className="mt-3 flex flex-row justify-center items-center space-x-2">
          {
            socialMedia.map((media) => (
              <a key={media.href} href={media.href} target="_blank">
                <media.icon className="w-6 h-6 transition-all duration-75 hover:scale-125"/>
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )

}

export default Landing;