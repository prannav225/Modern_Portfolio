"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-white mb-2">Frontend</h4>
          <ul className="flex flex-wrap gap-2">
            {["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Vite", "Redux", "React Router", "Responsive UI"].map(skill => (
              <span key={skill} className="px-3 py-1 bg-purple-900/40 rounded-full text-sm text-purple-200 border border-purple-500/30 hover:border-purple-500 transition-colors cursor-default">{skill}</span>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Backend</h4>
          <ul className="flex flex-wrap gap-2">
             {["Node.js", "Express.js", "Nest.js", "REST APIs", "Socket.IO", "WebRTC signaling"].map(skill => (
              <span key={skill} className="px-3 py-1 bg-blue-900/40 rounded-full text-sm text-blue-200 border border-blue-500/30 hover:border-blue-500 transition-colors cursor-default">{skill}</span>
            ))}
          </ul>
        </div>
         <div>
          <h4 className="font-bold text-white mb-2">Tools & Others</h4>
          <ul className="flex flex-wrap gap-2">
             {["Git", "GitHub", "WebSockets", "Figma", "Postman", "CI/CD basics", "WordPress", "JSON", "JWT Auth"].map(skill => (
              <span key={skill} className="px-3 py-1 bg-gray-800/60 rounded-full text-sm text-gray-300 border border-gray-600/30 hover:border-gray-500 transition-colors cursor-default">{skill}</span>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-4">
        <li className="bg-white/5 p-4 rounded-xl border border-white/10">
          <div className="font-bold text-xl text-purple-400">Bachelor of Science [PMCs]</div>
          <div className="text-lg text-white">Vijaya College, Bengaluru</div>
          <div className="text-gray-400">2018 – 2022</div>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="space-y-6">
        <li className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
            <div className="font-bold text-xl text-purple-400">Software Developer</div>
            <div className="text-gray-400 text-sm">Oct 2023 – Nov 2025</div>
          </div>
          <div className="text-lg text-white mb-2">BeePrecise</div>
          <div className="text-gray-400 text-sm mb-4">Bengaluru, India</div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Built and optimized full-stack modules for IoT-based beehive monitoring using React.js and Nest.js.</li>
            <li>Developed real-time dashboards visualizing hive health, temperature, humidity, and sensor analytics.</li>
            <li>Integrated AI-based prediction systems that classify hive health using ML-generated outputs.</li>
            <li>Collaborated with hardware engineers to integrate sensor devices and cloud services, showcased at Krishi Mela 2024.</li>
            <li>Improved UI/UX consistency and reduced dashboard load times using optimized API calls and caching.</li>
          </ul>
        </li>
        <li className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
            <div className="font-bold text-xl text-purple-400">Founding Team Member</div>
            <div className="text-gray-400 text-sm">2025</div>
          </div>
          <div className="text-lg text-white mb-2">Electronix AI</div>
          <div className="text-gray-400 text-sm mb-4">Bengaluru, India</div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Contributed to early-stage product design and architecture for AI-driven electronics co-engineering tools.</li>
            <li>Participated in brainstorming features for SaaS workflows, automation pipelines, and developer tooling.</li>
            <li>Explored feasibility of deep-learning integrations, custom datasets, and automation modules.</li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="md:grid md:grid-cols-2 gap-16 items-center">
          <div className="mb-12 md:mb-0 relative flex justify-center">
             <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[450px] aspect-square z-10">
                <div className="absolute -inset-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-40"></div>
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-black">
                  <img
                    alt="about_image"
                    src="/images/about.jpeg"
                    className="object-cover w-full h-full"
                  />
                </div>
             </div>
          </div>
          
          <div className="mt-4 md:mt-0 text-left">
            <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
              About Me 
              <span className="h-1 w-20 bg-purple-500 rounded-full block"></span>
            </h2>
            <p className="text-base lg:text-lg text-gray-400 mb-8 leading-relaxed">
              I am a dedicated software developer based in Bengaluru, India, specializing in building high-performance 
              applications using <span className="text-white font-medium">React.js</span>, <span className="text-white font-medium">Nest.js</span>, and modern web technologies. 
              My journey involves turning complex problems into simple, beautiful, and intuitive designs. Previously, I contributed to building IoT-based solutions at an AgriTech startup.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-700 pb-2">
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
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                Experience
              </TabButton>
            </div>
            
            <div className="mt-4 transition-all duration-300 min-h-[200px]">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;