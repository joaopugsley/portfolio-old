"use client"

import { useEffect, useState } from "react";
import { DiGithubBadge } from "react-icons/di";
import { AiFillStar, AiOutlineEye } from "react-icons/ai";
import Button from "../Button/Button";

export type RepoData = {
  stars: number
  watching: number
  last_update: string
}

const fetchRepositoryData = async (): Promise<RepoData | undefined> => {
  try {
    const response = await fetch("https://api.github.com/repos/joaopugsley/portfolio");
    const data = await response.json();
    return {
      stars: Number(data["stargazers_count"]),
      watching: Number(data["watchers_count"]),
      last_update: new Date(data["updated_at"]).toDateString()
    }
  } catch(e) {
    return;
  }
};

const Github = (): JSX.Element => {

  const [repoData, setRepoData] = useState<RepoData | undefined>(undefined);

  useEffect(() => {
    fetchRepositoryData().then((data) => {
      setRepoData(data);
    })
  }, []);

  return (
    <section className="relative pt-16 pb-96 px-6 w-full h-auto flex flex-col justify-center items-center">
      <h3 className="text-xl md:text-5xl">Gostou desse portfólio?</h3>
      <span className="text-center mt-2 bg-clip-text bg-gradient-to-br from-violet-500 to-blue-700 text-transparent">Considere marcar esse repositório com uma <a className="drop-shadow-glow text-white">estrela</a> no Github!</span>
      <div className="mt-5 w-72 h-44 md:w-96 md:h-48 p-4 flex flex-col justify-evenly items-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-700 transition-all duration-100 hover:scale-110 drop-shadow-xl">
        <h4 className="flex flex-row justify-center items-center"><DiGithubBadge className="w-auto h-8"/>joaopugsley/portfolio</h4>
        <div className="flex flex-col">
          <p className="flex flex-row items-center"><AiFillStar className="w-auto h-6 mr-1"/>{repoData?.stars || 0} stars</p>
          <p className="flex flex-row items-center"><AiOutlineEye className="w-auto h-6 mr-1"/>{repoData?.watching || 0} watching</p>
        </div>
        <a href="https://www.github.com/joaopugsley/portfolio" target="_blank" className="mt-3">
          <Button className="drop-shadow-2xl border-1 border-white">
            <span>Ver Repositório</span>
          </Button>
        </a>
      </div>
    </section>
  )

}

export default Github;