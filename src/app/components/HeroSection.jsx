"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const handleDownloadCV = () => {
    const cvFilePath = "Pranav_Frontend_Resume.pdf";

    // Create an anchor element to trigger the download
    const link = document.createElement("a");
    link.href = cvFilePath;
    link.target = "_blank";
    link.download = "Pranav_Frontend_Resume.pdf";
    link.click();
  };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white lg:text-6xl text-3xl sm:text-4xl font-extrabold mb-4 mt-14">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-300 to-sky-500 ">
              Hello I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Pranav",
                3000, // interval
                "Frontend Developer",
                2000,
                "Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] sm:text-lg lg:text-md mb-6 text-base">
            A Web Dev - dedicated to crafting user-centric interfaces that not
            only look great but also enhance the overall user experience.
          </p>
          <div className="">
            <button className="px-6 py-3 w-full sm:w-fit m-2 sm:m-1 bg-gradient-to-bl from-yellow-500 via-orange-300 to-sky-400 hover:bg-slate-200 rounded-full">
              Hire Me
            </button>
            <button
              onClick={handleDownloadCV}
              className="px-1 py-1 w-full sm:w-fit m-2 sm:m-1 rounded-full bg-gradient-to-bl from-yellow-500 via-orange-300 to-sky-400 hover:bg-slate-200 hover:text-black"
            >
              <span className="block bg-[#121212] rounded-full px-5 py-2 text-white">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] relative shadow-lg shadow-yellow-200 hover:scale-105 transition-all cursor-pointer hover:bg-gradient-to-r from-yellow-500 via-orange-300 to-sky-500 ">
            <Image
              src="/images\hero_image.png"
              alt="hero_image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
