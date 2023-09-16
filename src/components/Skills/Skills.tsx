"use client"

import skills from "@/helpers/constants/skills";

const Skills = (): JSX.Element => {

  return (
    <section className="relative w-full min-h-screen h-auto flex flex-col justify-center items-center">
      <h3 className="font-extrabold text-3xl md:text-5xl">Habilidades</h3>
      <div className="w-2/3 lg:w-1/2 h-96 p-5 flex flex-wrap gap-3 md:gap-8 justify-center items-center">
        {
          skills.map((skill) => (
            <a key={skill.title} href={skill.url} target="_blank" className="transition-all duration-100 hover:scale-110">
              <img alt={skill.title} src={`/images/skills/` + skill.image} className="h-8 md:h-12 select-none"/>
            </a>
          ))
        }
      </div>
    </section>
  )

}

export default Skills;