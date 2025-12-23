import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsData = [
  {
    id: 1,
    image: "/projects/getransfr.jpg",
    title: "Getransfr - P2P File Sharing",
    description: "High-performance P2P file-sharing platform with WebRTC data channels, real-time discovery, and drag-and-drop support.",
    tag: ["All", "Web"],
    gitUrl: "https://getransfr.vercel.app",
  },
  {
    id: 2,
    image: "/projects/Youtube_Clone.jpg",
    title: "YouTube Clone",
    description: "YouTube-style video streaming interface with search, playback, and category filtering using RapidAPI.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prannav225/youtube-clone",
  },
  {
    id: 3,
    image: "/projects/beyondental.jpg",
    title: "Beyond Dental Website",
    description: "Modern, responsive business website for a dental clinic with appointment sections and SEO optimization.",
    tag: ["All", "Web"],
    gitUrl: "https://beyondental.in/",
  },
  {
    id: 4,
    image: "/projects/pragathi_computers.jpg", 
    title: "Pragathi Computers",
    description: "Business website for a computer retail & services provider designed to improve local discoverability.",
    tag: ["All", "Web"],
    gitUrl: "https://pragathicomputers.com/",
  },
  {
    id: 5,
    image: "/projects/eai.jpg",
    title: "Electronix AI",
    description: "AI-powered hardware design tool offering instant datasheet analysis, smart component selection, and debugging insights.",
    tag: ["All", "Web"],
    gitUrl: "https://electronix.ai/",
  },
  {
    id: 6,
    image: "/projects/buildrn.jpg",
    title: "Build Right Now",
    description: "Media platform and playbook for tech founders, deconstructing how great companies are built through storytelling and frameworks.",
    tag: ["All", "Web"],
    gitUrl: "https://buildrightnow.com/",
  },
];
const ProjectSection = () => {
  return (
    <section className="py-16 md:py-24" id='projects'>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-1 w-24 md:w-52 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects ranging from web applications to hardware design tools, showcasing my expertise in modern technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectsData.map((project) => (
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;