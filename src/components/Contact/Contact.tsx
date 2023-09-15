"use client"

import socialMedia from "@/config/socialMedia";
import Button from "../Button/Button";

const Contact = (): JSX.Element => {

  return (
    <section className="relative w-full min-h-screen h-auto flex flex-col justify-center items-center space-y-2">
      <h3 className="font-extrabold text-lg lg:text-5xl">Impressionado<a className="bg-clip-text bg-gradient-to-br from-violet-500 to-blue-700 text-transparent opacity-50">(a)</a>? Entre em contato!</h3>
      <span className="bg-clip-text bg-gradient-to-br from-violet-500 to-blue-700 text-transparent">Se conecte comigo:</span>
      <div className="flex flex-row justify-center items-center space-x-2">
          {
            socialMedia.map((media) => (
              <a key={media.href} href={media.href} target="_blank">
                <media.icon className="w-8 h-8 transition-all duration-75 hover:scale-125"/>
              </a>
            ))
          }
      </div>
      <hr className="w-24"></hr>
      <span className="bg-clip-text bg-gradient-to-br from-violet-500 to-blue-700 text-transparent">Ainda não está convencido(a)?</span>
      <Button>
        <span>Fale com Joe! 🦝</span>
      </Button>
    </section>
  )

}

export default Contact;