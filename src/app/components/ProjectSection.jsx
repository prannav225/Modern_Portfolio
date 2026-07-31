import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProjectsData = [
  {
    id: 1,
    image: "/projects/wishcraft.jpg",
    title: "Wishcraft - Digital Experience Creator",
    description:
      "An interactive web platform enabling users to transform memories into magical digital cards and bespoke surprise experiences.",
    tag: ["All", "Web Apps & PWAs"],
    liveUrl: "https://wishcraft-seven.vercel.app/",
    usePreview: false,
    isFeatured: true,
  },
  {
    id: 2,
    image: "/projects/buckflo.jpg",
    title: "buckflo - Private Finance Tracker",
    description:
      "A private, offline-first personal finance PWA & Android app to track expenses, savings goals, and budgets entirely on-device with zero cloud tracking.",
    tag: ["All", "Web Apps & PWAs"],
    badge: "PWA & ANDROID APP",
    liveUrl: "https://buckflo.com",
    usePreview: false,
    isFeatured: true,
  },
  {
    id: 3,
    image: "/projects/fadex.png",
    title: "FADEX - Screenwriting Tool",
    description:
      "A minimalist, lightning-fast cinematic screenplay editor built with Next.js featuring industry-standard formatting, type-writer scrolling, and PDF export.",
    tag: ["All", "Web Apps & PWAs"],
    gitUrl: "https://github.com/prannav225/fadex",
    liveUrl: "https://fadex-writing.vercel.app/",
    usePreview: true,
  },
  {
    id: 4,
    image: "/projects/getransfr.jpg",
    title: "Getransfr - File Sharing App",
    description:
      "High-performance P2P file sharing app built with WebRTC and modern browser APIs, enabling direct-to-disk transfers with seamless UX.",
    tag: ["All", "Web Apps & PWAs"],
    liveUrl: "https://getransfr.vercel.app",
    gitUrl: "https://github.com/prannav225/getransfr",
    usePreview: false,
  },
  {
    id: 5,
    image: "/projects/Youtube_Clone.jpg",
    title: "YouTube Clone",
    description:
      "YouTube-style streaming interface with search, playback, and category browsing powered by RapidAPI.",
    tag: ["All", "Websites & Media"],
    liveUrl: "https://youtube-clone-theta-nine.vercel.app/",
    gitUrl: "https://github.com/prannav225/youtube-clone",
    usePreview: false,
  },
  {
    id: 6,
    image: "/projects/beyondental.jpg",
    title: "Beyond Dental Website",
    description:
      "Modern clinic website built for speed, SEO, and conversions. Featuring appointment-focused sections and clean UI.",
    tag: ["All", "Websites & Media"],
    liveUrl: "https://beyondental.in/",
    usePreview: true,
  },
  {
    id: 7,
    image: "/projects/pragathi_computers.jpg",
    title: "Pragathi Computers",
    description:
      "Business website built to improve local visibility, trust, and lead generation for a retail & services brand.",
    tag: ["All", "Websites & Media"],
    liveUrl: "https://pragathicomputers.com/",
    usePreview: true,
  },
  {
    id: 8,
    image: "/projects/eai.jpg",
    title: "Electronix AI",
    description:
      "AI-driven platform for hardware design workflows, enabling smarter datasheet analysis and component selection.",
    tag: ["All", "Websites & Media"],
    liveUrl: "https://electronix.ai/",
    usePreview: true,
  },
  {
    id: 9,
    image: "/projects/buildrn.jpg",
    title: "Build Right Now",
    description:
      "Media platform for founders delivering stories, frameworks, and playbooks on building great companies.",
    tag: ["All", "Websites & Media"],
    liveUrl: "https://buildrightnow.com/",
    usePreview: true,
  },
  {
    id: 10,
    image: "/projects/citrus.jpg",
    title: "Citrus Clothing",
    description:
      "Premium e-commerce experience for a menswear brand designed to showcase legacy, craftsmanship, and products.",
    tag: ["All", "Websites & Media"],
    liveUrl: "https://citrusclothing.in/",
    usePreview: true,
  },
];

const categories = ["All", "Web Apps & PWAs", "Websites & Media"];

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = ProjectsData.filter(
    (project) => activeCategory === "All" || project.tag.includes(activeCategory)
  );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  const hasMoreProjects = filteredProjects.length > 4;
  const remainingCount = filteredProjects.length - 4;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <section
      className="py-20 md:py-36 relative border-t border-white/5"
      id="projects"
    >
      <div className="container-custom">
        {/* Top Editorial Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.5em] font-black text-white/30 mb-3 block"
            >
              Selected Works / 02
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black tracking-tighter"
            >
              SELECTED <br />
              <span className="text-white/20 italic font-light">PROJECTS.</span>
            </motion.h2>
          </div>

          {/* Clean Inline Text Filter Tabs (No Box Enclosures) */}
          <div className="flex items-center gap-6 sm:gap-8 border-b sm:border-b-0 border-white/10 pb-4 sm:pb-0 overflow-x-auto no-scrollbar">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`relative py-2 text-xs font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "text-white"
                      : "text-white/40 hover:text-white/80"
                  }`}
                >
                  <span className="relative z-10">{category}</span>
                  {isActive && (
                    <motion.div
                      layoutId="editorialActiveTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Project List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-12 lg:gap-20"
          >
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                imgUrl={project.image}
                title={project.title}
                description={project.description}
                category={project.tag[1]}
                badge={project.badge}
                gitUrl={project.gitUrl}
                liveUrl={project.liveUrl}
                usePreview={project.usePreview}
                isFeatured={project.isFeatured}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Expand / Collapse Button Bar */}
        {hasMoreProjects && (
          <div className="flex items-center justify-center pt-16 md:pt-24">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white text-white hover:text-black rounded-full font-black text-xs uppercase tracking-widest transition-all duration-500 border border-white/10 hover:border-white shadow-2xl shadow-black/40 min-h-[48px] cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>SHOW FEWER PROJECTS</span>
                  <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  <span>VIEW ALL PROJECTS (+{remainingCount})</span>
                  <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
