"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";

export type NavItemProps = {
  href: string
  title: string
  className?: string
}

const NavItem = ({ href, title, className }: NavItemProps): JSX.Element => {
  const pathname = usePathname()
  const active = href === pathname;
  return (
    <Link href={href}>
      <span className={`
        ${className} ${!!active ? "bg-gradient-to-l from-violet-500 to-blue-700 rounded-lg" : "text-white ease-in-out transition-all duration-150 bg-clip-text bg-gradient-to-r hover:text-transparent from-violet-500 to-blue-700"}
      `}>
        {title}
      </span>
    </Link>
  )
}

export default NavItem;