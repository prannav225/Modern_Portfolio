import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  imgUrl,
  title,
  description,
  category,
  gitUrl,
  usePreview,
}) => {
  const previewUrl = usePreview
    ? `https://api.microlink.io/?url=${encodeURIComponent(
        gitUrl
      )}&screenshot=true&meta=false&embed=screenshot.url&waitFor=5000&prerender=true`
    : imgUrl;

  return (
    <motion.a
      href={gitUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full p-6 md:p-8 bg-white/2 backdrop-blur-3xl border border-white/5 rounded-4xl cursor-pointer hover:bg-white/5 hover:border-white/10 transition-all duration-700"
    >
      {/* Top Metadata Row */}
      <div className="flex justify-between items-start mb-6 md:mb-8">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
            / 0{id}
          </span>
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">
            {category}
          </span>
        </div>
        <div className="text-white/20 group-hover:text-white transition-colors">
          <ExternalLink size={16} strokeWidth={1.5} />
        </div>
      </div>

      {/* Image Container - Sharp & Wide */}
      <div className="relative aspect-video overflow-hidden rounded-2xl transition-all duration-700 ease-[0.16, 1, 0.3, 1] bg-white/5 shrink-0">
        <img
          src={previewUrl}
          alt={title}
          loading="lazy"
          className="object-cover object-top w-full h-full transition-all duration-1000 group-hover:scale-105"
          onLoad={(e) => {
            e.target.style.opacity = 1;
          }}
          onError={(e) => {
            e.target.src = imgUrl;
          }}
          style={{ opacity: 0 }}
        />

        {/* Hover Label */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <span className="bg-white text-black px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl">
            Explore
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="mt-8 flex flex-col flex-1">
        <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-4 uppercase leading-none">
          {title}
        </h3>

        <div className="flex flex-col flex-1 justify-between gap-8">
          <p className="text-white/40 text-sm md:text-base leading-relaxed font-light line-clamp-2">
            {description}
          </p>
          <div className="flex justify-start items-center gap-4 pt-4 border-t border-white/5">
            <div className="w-8 h-8 md:w-10 md:h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
              <ArrowRight size={16} />
            </div>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-white/20 group-hover:text-white transition-colors">
              View Case Study
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
