import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

const HeroSection = () => {
  const handleDownloadCV = () => {
    const cvFilePath = "Pranav_Resume.pdf";
    const link = document.createElement("a");
    link.href = cvFilePath;
    link.target = "_blank";
    link.download = "Pranav_Resume.pdf";
    link.click();
  };

  return (
    <section className="min-h-dvh flex items-center relative overflow-hidden pt-16 md:pt-0">
      {/* Structural Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 mb-4 md:mb-12"
            >
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/70">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/30">
                Freelance • Contract • Full-time
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[12vw] sm:text-[10vw] lg:text-[8vw] font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-4 md:mb-12"
            >
              CREATIVE <br />
              <span className="text-white/20">ENGINEER</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
              className="max-w-2xl"
            >
              <p className="text-sm md:text-3xl font-light text-white/40 leading-[1.4] md:leading-tight mb-4 md:mb-12">
                I build high-performance digital systems that bridge
                <span className="text-white">
                  {" "}
                  enterprise-grade engineering
                </span>{" "}
                and
                <span className="text-white"> human-centric design</span>.
              </p>

              <div className="space-y-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-12">
                  <button
                    onClick={handleDownloadCV}
                    className="group flex items-center gap-4 transition-all"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white text-black rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-xl shadow-white/5">
                      <Download size={20} />
                    </div>
                    <div className="text-left">
                      <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase block mb-1">
                        Resume
                      </span>
                      <span className="text-[10px] text-white/20 uppercase tracking-widest font-mono block">
                        PDF / 2.4MB
                      </span>
                    </div>
                  </button>

                  <a
                    href="mailto:pra9v@proton.me"
                    className="group flex items-center gap-4 transition-all"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <Mail size={20} />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                          Hire Me
                        </span>
                        <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      </div>
                      <span className="text-[10px] text-white/20 uppercase tracking-widest font-mono block whitespace-nowrap">
                        Available Now
                      </span>
                    </div>
                  </a>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/10">
                    Core Expertise
                  </span>
                  <div className="flex items-center gap-8">
                    {["React", "Node", "AI"].map((tech) => (
                      <div key={tech} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-white/20"></div>
                        <span className="text-xs md:text-sm font-light text-white/40 tracking-wide uppercase">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 lg:justify-self-end mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5,
              }}
              className="relative flex justify-center lg:block"
            >
              <div className="w-40 h-40 md:w-64 md:h-64 border border-white/5 rounded-full flex items-center justify-center relative group">
                <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <a
                  href="#projects"
                  className="w-28 h-28 md:w-40 md:h-40 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex flex-col items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-700"
                >
                  <ArrowRight
                    size={28}
                    className="mb-2 group-hover:translate-x-2 transition-transform duration-500"
                  />
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black">
                    View Work
                  </span>
                </a>
              </div>

              {/* Coordinates */}
              <div className="absolute -bottom-10 -right-4 flex-col items-end opacity-20 hidden md:flex">
                <span className="text-[10px] font-mono uppercase tracking-widest">
                  12.97° N
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest">
                  77.59° E
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
