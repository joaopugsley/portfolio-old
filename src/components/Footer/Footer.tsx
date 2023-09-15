"use client"

const Footer = (): JSX.Element => {
  return (
    <footer className="relative w-full h-24 flex flex-col justify-center items-center space-y-1">
      <p className="font-thin text-xs md:text-sm">Esse website foi desenvolvido em Next.js com TypeScript</p>
      <p className="text-xs md:text-base drop-shadow-glow">&copy; {new Date().getFullYear()} João Vitor Pugsley. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer;