"use client"

import projects from "@/config/projects";
import ProjectItem from "./ProjectItem";

const Projects = (): JSX.Element => {

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
      <h3 className="font-extrabold text-3xl md:text-5xl">Projetos</h3>
      <div className="mt-3 md:mt-10 flex flex-col justify-center items-center space-y-3 md:space-y-12">
        {
          projects.map((project, i) => (
            <ProjectItem 
              key={`project-${i}`}
              type={project.type}
              title={project.title}
              images={project.images}
              description={project.description}
              url={project.url}
              stack={project.stack}
            />
          ))
        }
      </div>
    </section>
  )

}

export default Projects;