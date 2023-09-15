import './globals.css'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'

const worksans = Work_Sans({ weight: "500", subsets: ["latin"]});

export const metadata: Metadata = {
  title: 'João Pugsley | Web Developer',
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
