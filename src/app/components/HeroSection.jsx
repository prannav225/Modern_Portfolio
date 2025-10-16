"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const handleDownloadCV = () => {
    const cvFilePath = "Pranav_Resume.pdf";

    // Create an anchor element to trigger the download
    const link = document.createElement("a");
    link.href = cvFilePath;
    link.target = "_blank";
    link.download = "Pranav_Resume.pdf";
    link.click();
  };
  return (
    <div className="py-10 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 mt-4 lg:mt-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-300 to-sky-500">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Naga Pranav M",
                3000, // interval
                "Software Developer",
                2000,
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block"
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
            Software Developer specializing in building exceptional digital experiences with React.js, Nest.js, and modern web technologies. 
            Currently focused on IoT-based solutions at BeePrecise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 w-full sm:w-fit rounded-full bg-gradient-to-r from-yellow-500 via-orange-300 to-sky-400 hover:from-yellow-600 hover:via-orange-400 hover:to-sky-500 text-white font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative rounded-full bg-gradient-to-br from-yellow-500 via-orange-300 to-sky-500 p-1 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shadow-2xl shadow-yellow-500/20">
            <div className="rounded-full bg-[#121212] w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                src="/images/hero_image.png"
                alt="Naga Pranav M"
                width={350}
                height={350}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;