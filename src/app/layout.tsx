import './globals.css'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'

const worksans = Work_Sans({ weight: "500", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "João Pugsley | Web Developer",
  applicationName: "João Pugsley",
  description: "Explore o portfólio de desenvolvimento web de João Pugsley, que exibe uma ampla variedade de sites criativos e responsivos.",
  keywords: ["desenvolvimento web", "web design", "portfolio", "João Vitor Pugsley", "João Pugsley", "desenvolvimento front-end", "desenvolvimento back-end", "design responsivo"],
  viewport: "width=device-width, initial-scale=1",
  authors: [{name: "João Vitor Pugsley", url: "https://joaopugsley.dev"}],
  openGraph: {
    type: "website",
    url: "https://joaopugsley.dev",
    title: "João Pugsley | Web Developer",
    description: "Explore o portfólio de desenvolvimento web de João Pugsley, que exibe uma ampla variedade de sites criativos e responsivos.",
    siteName: "João Pugsley"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="no-scrollbar">
      <body className={worksans.className}>
        {children}
      </body>
    </html>
  )
}
