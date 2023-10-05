"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML, CSS, JavaScript</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
        <li>React JS</li>
        <li>Redux</li>
        <li>Node JS</li>
        <li>Express JS</li>
        <li>Mongo DB</li>
        <li>Next JS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li className="font-bold text-lg">Bachelore&apos;s of Science</li>
        <li>Vijaya College, Jaynagar, Bengaluru</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Certified in CSS and JavaScript from Udemy</li>
        <li>Certified in Modern JavaScript for React JS - ES6 from Udemy</li>
        <li>Certified in React JS from Infosys Springboard</li>
        <li>Certified in MERN Stack from JSpiders</li>
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
    <section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="about_image"
          src="/images\about_image.png"
          width={300}
          height={300}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="bg-gradient-to-r  from-yellow-500 via-orange-300 to-sky-500 h-1 w-44 mb-4 rounded-3xl"></div>
          <p className="text-base lg:text-lg text-justify">
            Hello there! I&apos;m Naga Pranav M, a passionate frontend developer
            based in Bengaluru, India. With a solid foundation on Web
            Development I&apos;m dedicated to crafting user-centric interfaces that
            not only look great but also enhance the overall user experience. My
            goal is to combine creativity with technical skills to build
            websites and web applications that leave a lasting impression. Let&apos;s
            connect and embark on a journey to create exceptional digital
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
          <div className="flex flex-row mt-8">
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
              Certification
            </TabButton>
          </div>
          <div className="mt-3">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
