import React from "react";
import { ExternalLink, ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  imgUrl,
  title,
  description,
  category,
  gitUrl,
  liveUrl,
  usePreview,
}) => {
  const mainUrl = liveUrl || gitUrl;
  const isPersonal = !!gitUrl;

  const previewUrl = `https://api.microlink.io/?url=${encodeURIComponent(
    mainUrl
  )}&screenshot=true&meta=false&embed=screenshot.url&waitFor=5000&prerender=true`;

  const [previewLoaded, setPreviewLoaded] = React.useState(false);
  const [showFallback, setShowFallback] = React.useState(false);

  React.useEffect(() => {
    if (usePreview) {
      const timer = setTimeout(() => {
        setShowFallback(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [usePreview]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full p-6 md:p-8 bg-white/2 backdrop-blur-3xl border border-white/5 rounded-4xl hover:bg-white/5 hover:border-white/10 transition-all duration-700"
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
        <div className="flex gap-3">
          {gitUrl && (
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white transition-colors"
              title="View Source on GitHub"
            >
              <Github size={18} strokeWidth={1.5} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white transition-colors"
              title="Visit Live Site"
            >
              <ExternalLink size={18} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      {/* Image Container - Sharp & Wide */}
      <a
        href={mainUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-video overflow-hidden rounded-2xl transition-all duration-700 ease-[0.16, 1, 0.3, 1] bg-white/5 shrink-0 cursor-pointer"
      >
        <img
          src={imgUrl}
          alt={title}
          className="absolute inset-0 object-cover object-top w-full h-full transition-all duration-1000 group-hover:scale-105"
          style={{
            opacity: !usePreview || (showFallback && !previewLoaded) ? 1 : 0,
          }}
        />

        {usePreview && (
          <img
            src={previewUrl}
            alt={title}
            className="absolute inset-0 object-cover object-top w-full h-full transition-all duration-1000 group-hover:scale-105"
            onLoad={() => setPreviewLoaded(true)}
            onError={() => setShowFallback(true)}
            style={{
              opacity: previewLoaded ? 1 : 0,
            }}
          />
        )}

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="bg-white text-black px-6 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
            {isPersonal ? "View Solution" : "Visit Site"}
          </span>
        </div>
      </a>

      {/* Project Content */}
      <div className="mt-8 flex flex-col flex-1">
        <h3 className="text-2xl md:text-3xl font-black -tracking-tight mb-4 uppercase leading-none">
          {title}
        </h3>

        <div className="flex flex-col flex-1 justify-between gap-8">
          <p className="text-white/40 text-sm md:text-base leading-relaxed font-light line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
            {isPersonal && gitUrl ? (
              <a
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-start items-center gap-4 group/btn"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 border border-white/10 rounded-full flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-500">
                  <Github size={16} />
                </div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-white/20 group-hover/btn:text-white transition-colors">
                  View on GitHub
                </span>
              </a>
            ) : (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-start items-center gap-4 group/btn"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 border border-white/10 rounded-full flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-500">
                  <ArrowRight size={16} />
                </div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-white/20 group-hover/btn:text-white transition-colors">
                  Visit Live Site
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
