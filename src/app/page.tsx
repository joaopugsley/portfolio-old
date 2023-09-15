"use client"

import Landing from "@/components/Landing/Landing";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Github from "@/components/Github/Github";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="bg-default pt-20 overflow-x-hidden">
        <Landing/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Github/>
        <Footer/>
      </main>
    </>
  )
}