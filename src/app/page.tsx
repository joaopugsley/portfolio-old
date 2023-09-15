"use client"

import Landing from "@/components/Landing/Landing";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="bg-default pt-20 overflow-x-hidden">
        <Landing/>
        <Projects/>
      </main>
    </>
  )
}