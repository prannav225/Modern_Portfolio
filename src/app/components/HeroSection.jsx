import React from "react";
import { TypeAnimation } from "react-type-animation";

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
    <div className="section-min-height flex items-center justify-center relative">
      <div className="bg-glow top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="bg-glow-blue bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            I build things for{" "}
            <span className="text-gradient">
              the web
            </span>
          </h1>
          <div className="text-2xl sm:text-3xl text-gray-400 mb-8 font-light h-[60px]">
             I am a{" "}
            <TypeAnimation
              sequence={[
                "FrontendDeveloper",
                2000,
                "Creative Engineer",
                2000,
                "React Specialist",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white font-medium"
            />
          </div>
          <p className="text-gray-400 text-lg lg:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Software Developer with 2+ years of experience creating modern, reliable, and user-focused web applications. 
            Dedicated to building clean interfaces and elevating overall product quality. Currently open to new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Download CV
            </button>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-gray-600 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center relative w-full">
          <div className="relative w-full max-w-[500px] sm:max-w-[400px] lg:max-w-[450px] aspect-square z-10">
            <div className="absolute -inset-20 bg-[radial-gradient(circle at center,rgba(168,85,247,0.25) 0%,rgba(6,182,212,0.12) 35%,rgba(6,182,212,0.05) 60%,transparent 85%)] rounded-full blur-[100px] opacity-40 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-2 border-gray-800 bg-[#0a0a0a] overflow-hidden">
               <img
                src="/images/hero.jpeg"
                alt="Naga Pranav M"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;