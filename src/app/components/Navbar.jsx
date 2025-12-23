"use client";

import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const Navbar = () => {
  let [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 md:top-4 left-0 right-0 z-50 flex justify-center w-full px-0 md:px-4">
      <div className="glass px-6 py-4 md:py-3 rounded-none md:rounded-full flex items-center justify-between w-full max-w-5xl border-x-0 md:border-x border-t-0 md:border-t">
        {/* Left Side - Logo */}
        <a href={"/"} className="text-xl md:text-2xl font-bold text-white tracking-tighter hover:text-purple-400 transition-colors duration-300 min-w-[150px]">
          Naga Pranav
          <span className="text-purple-500">.</span>
        </a>
        
        {/* Mobile Menu Button - Moved to right on mobile */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-slate-200 hover:text-white transition-colors duration-300"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-slate-200 hover:text-white transition-colors duration-300"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Social Icons */}
        <div className="hidden md:flex items-center gap-4 min-w-[150px] justify-end">
          <a href="https://github.com/prannav225" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:scale-110 transition-all">
            <img src="/gitHub-icon.svg" alt="Github" width={24} height={24} className="brightness-0 invert" />
          </a>
          <a href="https://www.linkedin.com/in/prannav-m/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:scale-110 transition-all">
            <img src="/linkedIn-icon.svg" alt="LinkedIn" width={24} height={24} className="brightness-0 invert" />
          </a>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;