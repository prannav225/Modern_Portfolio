"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 list-disc pl-5 pr-4">
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>Nest.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>HTML, CSS</li>
        <li>Tailwind CSS</li>
        <li>MongoDB</li>
        <li>REST API</li>
        <li>Git, GitHub</li>
        <li>Figma</li>
        <li>WordPress</li>
        <li>React Native</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-4">
        <li>
          <div className="font-bold text-xl text-yellow-400">B.Sc. Computer Science</div>
          <div className="text-lg">Vijaya College, Bengaluru</div>
          <div className="text-[#ADB7BE]">CGPA: 7.2 (2018–2022)</div>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certification",
    content: (
      <ul className="space-y-4">
        <li>
          <div className="font-bold text-lg">Product Management Basics</div>
          <div className="text-[#ADB7BE]">Pendo.io (Feb 2025)</div>
        </li>
        <li>
          <div className="font-bold text-lg">AI for Product Management</div>
          <div className="text-[#ADB7BE]">Pendo.io (Aug 2025)</div>
        </li>
        <li>
          <div className="font-bold text-lg">React JS</div>
          <div className="text-[#ADB7BE]">Infosys Springboard (Jul 2023)</div>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="space-y-6">
        <li>
          <div className="font-bold text-xl text-yellow-400">Software Developer</div>
          <div className="text-lg">BeePrecise (AI-Powered AgriTech Startup)</div>
          <div className="text-[#ADB7BE] mb-2">Bengaluru, India | Oct 2023 – Present</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Built and optimized full-stack modules for IoT-based beehive monitoring (React.js, Nest.js)</li>
            <li>Developed real-time dashboards for beehive health monitoring</li>
            <li>Integrated AI based prediction of beehive health based on the parameters collected</li>
            <li>Integrated hardware-software solutions, presented at Krishi Mela 2024</li>
          </ul>
        </li>
        <li>
          <div className="font-bold text-xl text-yellow-400">Project Participation</div>
          <div className="text-lg">Electronix AI (2025)</div>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Participated in early-stage brainstorming and ideation sessions</li>
            <li>Contributing to foundational concepts for SaaS solutions in electronics co-engineering</li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  let [tab, setTab] = useState("skills");
  let [ispending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="bg-gradient-to-r from-yellow-500 via-orange-300 to-sky-500 h-1 w-24 md:w-44 mx-auto rounded-full"></div>
        </div>
        
        <div className="md:grid md:grid-cols-2 gap-12 items-center">
          <div className="mb-12 md:mb-0 flex justify-center">
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-1 w-64 h-64 md:w-80 md:h-80 shadow-2xl shadow-yellow-500/10">
              <div className="rounded-2xl bg-[#121212] w-full h-full flex items-center justify-center">
                <Image
                  alt="about_image"
                  src="/images\about_image.png"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-base lg:text-lg text-justify mb-8">
              Hello there! I&apos;m Naga Pranav M, a passionate software developer
              based in Bengaluru, India. With expertise in React.js, Nest.js, and modern web technologies,
              I specialize in building exceptional digital experiences. Currently, I&apos;m working at BeePrecise,
              an AI-powered AgriTech startup, where I develop full-stack solutions for IoT-based beehive monitoring systems.
              My goal is to combine creativity with technical skills to build websites and web applications that leave a 
              lasting impression. Let&apos;s connect and embark on a journey to create exceptional digital
              experiences that make a difference. Feel free to reach out via email
              at{" "}
              <span className="font-bold text-yellow-500">
                nagapranav.m@gmail.com
              </span>{" "}
              or connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/prannav-m/"
                className="font-bold text-yellow-400 hover:underline underline-offset-4 decoration-blue-500"
              >
                LinkedIn
              </a>
              .
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certification")}
                active={tab === "certification"}
              >
                Certifications
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                Experience
              </TabButton>
            </div>
            
            <div className="mt-4 bg-gray-800/50 p-6 rounded-2xl border border-gray-700 transition-all duration-300">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;