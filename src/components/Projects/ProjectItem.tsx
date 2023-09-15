"use client"

import { BsBoxArrowUpRight } from "react-icons/bs"
import Carousel from "../Carousel/Carousel"
import Dropdown from "../Dropdown/Dropdown"

export type ProjectItemProps = {
  type: string
  title: string
  images: string[]
  description: string
  url: string
  stack: string[]
}

const ProjectItem = ({ type, title, images, description, url, stack }: ProjectItemProps): JSX.Element => {
  const formattedImages = images.map(image => `/images/projects/${image}`);
  return (
    <div className="w-full p-2 pb-4 rounded-lg bg-gradient-to-bl from-violet-500 to-blue-500 drop-shadow-sm flex flex-col space-y-2">
      <Carousel images={formattedImages} rounded={true} className="w-full"/>
      <div className="p-2 flex flex-col">
        <span className="font-thin text-sm/3 text-violet-100">{type}</span>
        <h4 className="font-extrabold text-xl">{title}</h4>
        <span className="font-extralight text-sm text-gray-100">{description}</span>
        <div className="relative flex flex-row mt-3">
          <Dropdown label={"Tecnologias Utilizadas"}>
            <div className="flex flex-col space-y-1 mt-2">
              {
                stack.map((tech) => (
                  <span key={tech}>- {tech}</span>
                ))
              }
            </div>
          </Dropdown>
          <a href={url} target="_blank" className="ml-2 w-8 h-8 bg-gradient-to-r from-violet-500 to-blue-700 rounded-md flex justify-center items-center transition-all duration-75 hover:scale-110">
            <BsBoxArrowUpRight/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem;