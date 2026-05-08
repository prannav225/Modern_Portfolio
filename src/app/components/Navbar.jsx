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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id || "home");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    navLinks.forEach((link) => {
      if (link.path.startsWith("#")) {
        const element = document.querySelector(link.path);
        if (element) observer.observe(element);
      } else if (link.path === "/") {
        const hero = document.querySelector("section");
        if (hero) observer.observe(hero);
      }
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2 md:p-6 bg-linear-to-b from-[#0c0c0b] to-transparent pointer-events-none">
      <div
        className={`flex items-center justify-between w-full max-w-5xl px-5 py-2 md:px-8 md:py-4 transition-all duration-700 rounded-full border border-white/5 pointer-events-auto ${
          scrolled
            ? "bg-white/5 backdrop-blur-2xl shadow-2xl border-white/10"
            : "bg-transparent backdrop-blur-none"
        }`}
      >
        <div className="flex-1">
          <a href="/" className="group flex items-center gap-2">
            <p
              className="text-sm tracking-widest"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              npm _
            </p>
          </a>
        </div>

        {/* Desktop Nav - Middle */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.path}
              className={`text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-300 ${
                activeSection === link.path.replace("#", "") ||
                (activeSection === "home" && link.path === "/")
                  ? "text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Desktop Nav - Right */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-6">
          <a
            href="/?resume=true"
            className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-black bg-white/5 border border-white/10 px-4 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Resume
          </a>
          <div className="flex items-center gap-6 border-l border-white/5 pl-6">
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
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-2 text-white/40 hover:text-white transition-colors"
          >
            {navbarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

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
                  className={`text-xs uppercase tracking-[0.5em] font-black transition-all ${
                    activeSection === link.path.replace("#", "") ||
                    (activeSection === "home" && link.path === "/")
                      ? "text-white"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {link.title}
                </a>
              ))}
              <a
                href="/?resume=true"
                onClick={() => setNavbarOpen(false)}
                className="text-[10px] uppercase tracking-[0.3em] font-black bg-white/10 border border-white/10 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all"
              >
                Resume
              </a>
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
