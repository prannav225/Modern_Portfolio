import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const ProjectsData = [
  {
    id: 1,
    image: "/projects/getransfr.jpg",
    title: "Getransfr - File Sharing App",
    description:
      "High-performance P2P file-sharing platform using WebRTC, File System Access API, and Screen Wake Lock to enable seamless, direct-to-disk transfers.",
    tag: ["All", "Web"],
    liveUrl: "https://getransfr.vercel.app",
    gitUrl: "https://github.com/prannav225/getransfr",
    usePreview: false,
  },
  {
    id: 2,
    image: "/projects/Youtube_Clone.jpg",
    title: "YouTube Clone",
    description:
      "YouTube-style video streaming interface with search, playback, and category filtering using RapidAPI.",
    tag: ["All", "Web"],
    liveUrl: "https://youtube-clone-theta-nine.vercel.app/",
    gitUrl: "https://github.com/prannav225/youtube-clone",
    usePreview: false,
  },
  {
    id: 3,
    image: "/projects/beyondental.jpg",
    title: "Beyond Dental Website",
    description:
      "Modern, responsive business website for a dental clinic with appointment sections and SEO optimization.",
    tag: ["All", "Web"],
    liveUrl: "https://beyondental.in/",
    usePreview: true,
  },
  {
    id: 4,
    image: "/projects/pragathi_computers.jpg",
    title: "Pragathi Computers",
    description:
      "Business website for a computer retail & services provider designed to improve local discoverability.",
    tag: ["All", "Web"],
    liveUrl: "https://pragathicomputers.com/",
    usePreview: true,
  },
  {
    id: 5,
    image: "/projects/eai.jpg",
    title: "Electronix AI",
    description:
      "AI-powered hardware design tool offering instant datasheet analysis, smart component selection, and debugging insights.",
    tag: ["All", "Web"],
    liveUrl: "https://electronix.ai/",
    usePreview: true,
  },
  {
    id: 6,
    image: "/projects/buildrn.jpg",
    title: "Build Right Now",
    description:
      "Media platform and playbook for tech founders, deconstructing how great companies are built through storytelling and frameworks.",
    tag: ["All", "Web"],
    liveUrl: "https://buildrightnow.com/",
    usePreview: true,
  },
  {
    id: 7,
    image: "/projects/citrus.jpg",
    title: "Citrus Clothing",
    description:
      "A premier Indian menswear brand specializing in contemporary fashion. The platform features a sophisticated e-commerce experience showcasing 25 years of design legacy and craftsmanship.",
    tag: ["All", "Web"],
    liveUrl: "https://citrusclothing.in/",
    usePreview: true,
  },
];

const ProjectSection = () => {
  return (
    <section
      className="py-24 md:py-40 relative border-t border-white/5"
      id="projects"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16 md:mb-24">
          <div className="lg:col-span-12">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.5em] font-black text-white/20 mb-4 block"
            >
              Selected Works / 02
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-9xl font-black tracking-tighter"
            >
              SELECTED <br />
              <span className="text-white/20 italic font-light">PROJECTS.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-32">
          {ProjectsData.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              category={project.tag[1]}
              gitUrl={project.gitUrl}
              liveUrl={project.liveUrl}
              usePreview={project.usePreview}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
