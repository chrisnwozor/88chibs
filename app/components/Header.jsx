"use client";

import { User, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  
  SignInButton,
  
  SignedOut,
  UserButton,
  SignedIn,
} from "@clerk/nextjs";

const Header = () => {
  const [activeLink, setActiveLink] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <header className="text-white">
      <nav className="fixed top-0 left-0 right-0 w-full px-5 lg:px-8 xl:px-[3%] py-4 flex items-center justify-between z-50 border border-b-[#fff] border-r-0 border-l-0 border-t-0 bg-[#010101]">
        <a href="#top">
          <h2 className="text-3xl cursor-pointer">88CHIBS</h2>
        </a>
        <ul className="hidden md:flex items-center gap-8 lg:gap-12 px-12 py-3 ">
          <li>
            <a
              href="#top"
              onMouseEnter={() => setActiveLink("top")}
              onMouseLeave={() => setActiveLink("")}
              className={`${
                activeLink === "top" ? "border-b-5 border-[#ff8c00]" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#product"
              onMouseEnter={() => setActiveLink("product")}
              onMouseLeave={() => setActiveLink("")}
              className={`${
                activeLink === "product" ? "border-b-5 border-[#ff8c00]" : ""
              }`}
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#about"
              onMouseEnter={() => setActiveLink("about")}
              onMouseLeave={() => setActiveLink("")}
              className={`${
                activeLink === "about" ? "border-b-5 border-[#ff8c00]" : ""
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onMouseEnter={() => setActiveLink("contact")}
              onMouseLeave={() => setActiveLink("")}
              className={`${
                activeLink === "contact" ? "border-b-5 border-[#ff8c00]" : ""
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              className="border-2 p-3 cursor-pointer"
            />
          </SignedOut>

          <button className="block md:hidden cursor-pointer" onClick={openMenu}>
            <MenuIcon />
          </button>
        </div>
        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[#a9a9a9] transition duration-500"
        >
          <div className="absolute right-6 top-6 " onClick={closeMenu}>
            <X size={30} />
          </div>
          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#product" onClick={closeMenu}>
              Products
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
