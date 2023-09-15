"use client"

import { useEffect, useState } from "react";
import navbarItems from "@/config/navbarItems";
import NavItem from "./NavItem";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

const Navbar = (): JSX.Element => {

  const [mobileMenuOpened, setMobileMenuOpened] = useState<Boolean>(false);
  const [scrolled, setScrolled] = useState<Boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpened((state) => !state);
  }

  const handleNavbarShadow = () => {
    setScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarShadow);
    return () => {
      window.removeEventListener("scroll", handleNavbarShadow);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full px-8 h-[80px] z-[1000] flex justify-center items-center align-middle text-center bg-default border-violet-400 ${!!scrolled && "border-b-1"}`}>
        <div className="absolute left-8 md:left-12 transition-all ease-out duration-500 hover:scale-110">
          <Link href="/">
            <h3 className="font-extrabold text-2xl bg-gradient-to-r from-violet-500 to-blue-700 bg-clip-text hover:text-transparent transition-all duration-200">João Pugsley</h3>
          </Link>
        </div>
        <div className="hidden md:right-12 md:flex flex-row justify-center items-center">
          {
            navbarItems.map((item) => (
              <NavItem key={item.href} href={item.href} title={item.title} className="px-2 text-lg"/>
            ))
          }
        </div>
        <div onClick={toggleMobileMenu} className={`absolute right-8 p-[2px] rounded-md flex md:hidden ${mobileMenuOpened ? "bg-gradient-to-r from-violet-500 to-blue-700" : null}`}>
          <HiMenu className="w-6 h-6 text-white"/>
        </div>
      </nav>
      <div className={`${mobileMenuOpened ? "flex" : "hidden"} z-[1000] flex-col fixed top-20 w-full h-[calc(100vh-80px)] bg-default justify-center items-center`}>
          {
            navbarItems.map((item) => (
              <NavItem key={"mobile-" + item.href} href={item.href} title={item.title} className="px-2 text-4xl"/>
            ))
          }
      </div>
    </>
  )

}

export default Navbar;