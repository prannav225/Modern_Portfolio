import React from "react";
import { ArrowUpRight, Github, Sparkles, Globe } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  imgUrl,
  title,
  description,
  category,
  badge,
  gitUrl,
  liveUrl,
  usePreview,
  isFeatured = false,
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

  const formattedId = id < 10 ? `0${id}` : `${id}`;
  const displayUrl = mainUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center py-8 lg:py-12 border-b border-white/5 last:border-b-0"
    >
      {/* Left Column: Editorial Info */}
      <div className="lg:col-span-5 flex flex-col justify-between h-full order-2 lg:order-1">
        <div>
          {/* Index & Badge */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest font-bold">
              /{formattedId}
            </span>
            <span className="text-[10px] uppercase tracking-widest font-black text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              {category}
            </span>
            {badge && (
              <span className="text-[9px] uppercase tracking-widest font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 shadow-sm">
                {badge}
              </span>
            )}
            {isFeatured && !badge && (
              <span className="inline-flex items-center gap-1.5 text-[9px] font-black tracking-widest uppercase text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 shadow-sm">
                <Sparkles size={11} className="animate-pulse" /> FLAGSHIP APP
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-normal mb-3 leading-snug text-white">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/60 leading-relaxed font-light text-sm sm:text-base mb-8">
            {description}
          </p>
        </div>

        {/* Minimal Action Links */}
        <div className="flex items-center gap-4 flex-wrap">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white bg-white/10 hover:bg-white hover:text-black px-6 py-3.5 rounded-full transition-all duration-300 active:scale-95 shadow-lg"
            >
              <span>Visit Live Site</span>
              <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          )}

          {gitUrl && (
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-5 py-3.5 rounded-full border border-white/10 transition-all duration-300 active:scale-95"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>

      {/* Right Column: Mac Browser Preview Window */}
      <div className="lg:col-span-7 order-1 lg:order-2">
        <a
          href={mainUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative rounded-2xl sm:rounded-3xl border border-white/10 bg-black/60 overflow-hidden shadow-2xl hover:border-white/25 transition-all duration-500"
        >
          {/* Mac Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/[0.04] border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/10 text-[10px] font-mono text-white/40 truncate max-w-[180px] sm:max-w-xs">
              <Globe size={11} className="shrink-0 text-white/30" />
              <span className="truncate">{displayUrl}</span>
            </div>

            <div className="w-10" />
          </div>

          {/* Screenshot Display */}
          <div className="relative aspect-video sm:aspect-[16/10] w-full overflow-hidden bg-black/80">
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

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
              <span className="bg-white text-black px-6 py-3 text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500 flex items-center gap-2">
                Open Project <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
