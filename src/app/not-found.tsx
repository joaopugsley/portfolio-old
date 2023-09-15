"use client"

import Button from "@/components/Button/Button";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <Navbar/>
      <main className="bg-default pt-20 overflow-x-hidden">
        <section className="relative w-full min-h-[calc(100vh-80px)] flex justify-center items-center">
          <div className="flex flex-col md:justify-center md:items-center">
            <h1 className="text-6xl font-extrabold text-white">404.</h1>
            <h2 className="text-6xl font-extrabold text-white">Not Found</h2>
            <p className="text-sm font-thin bg-clip-text bg-gradient-to-br from-violet-500 to-blue-700 text-transparent">Ei! Você parece perdido :(</p>
            <Button onClick={() => {router.push("/")}} className="mt-2">
              <span>Voltar ao Início</span>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}