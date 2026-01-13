"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2 md:p-6 bg-linear-to-b from-[#0c0c0b] to-transparent pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center justify-between w-full max-w-5xl px-5 py-2 md:px-8 md:py-4 transition-all duration-700 rounded-full border border-white/5 pointer-events-auto ${
          scrolled
            ? "bg-white/5 backdrop-blur-2xl shadow-2xl border-white/10"
            : "bg-transparent backdrop-blur-none"
        }`}
      >
        <a href="/" className="group flex items-center gap-2">
          <span className="text-[10px] sm:text-sm font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase transition-all group-hover:tracking-[0.5em]">
            Naga Pranav M<span className="text-white/20">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.path}
              className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40 hover:text-white transition-all duration-300"
            >
              {link.title}
            </a>
          ))}
          <div className="flex items-center gap-6 ml-4 border-l border-white/5 pl-8">
            <a
              href="https://github.com/prannav225"
              target="_blank"
              rel="noreferrer"
              className="text-white/20 hover:text-white transition-colors duration-300"
            >
              <Github size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com/in/prannav-m"
              target="_blank"
              rel="noreferrer"
              className="text-white/20 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden p-2 text-white/40 hover:text-white transition-colors"
        >
          {navbarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-20 left-6 right-6 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-10 md:hidden z-50 pointer-events-auto shadow-2xl"
          >
            <div className="flex flex-col gap-8 items-center text-center">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.path}
                  onClick={() => setNavbarOpen(false)}
                  className="text-xs uppercase tracking-[0.5em] font-black text-white/40 hover:text-white transition-all"
                >
                  {link.title}
                </a>
              ))}
              <div className="flex gap-10 mt-6 pt-8 border-t border-white/5 w-full justify-center">
                <a
                  href="https://github.com/prannav225"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/20 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/prannav-m"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/20 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
