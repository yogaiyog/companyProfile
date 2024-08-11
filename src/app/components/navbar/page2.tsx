"use client";

import Link from "next/link";
import { useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-emerald-600 py-2 shadow-lg md:px-0 px-5 relative z-50">
      <nav className="text-white flex md:w-2/4 sm:w-screen m-auto justify-between items-center relative z-50">
        <h1 className="font-bold text-3xl">Logo</h1>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none z-50 relative"
          >
            <Bars3Icon className="h-7 w-7" />
          </button>
        </div>
        <div
          className={` ${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex-row md:gap-3 md:flex md:static gap-20 absolute top-0 left-0 w-full h-screen md:h-fit items-center justify-center bg-emerald-600 md:bg-transparent z-40`}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Products</Link>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Teams</Link>
        </div>
        <div className="hidden md:flex"></div>
      </nav>
    </div>
  );
}
