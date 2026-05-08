import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  ArrowLeft,
  Terminal,
  Code2,
  GraduationCap,
  FolderCode,
} from "lucide-react";
import { resumeData } from "../data/resumeData";

// --- Sub-components for better maintainability ---

const LineNumber = ({ num }) => (
  <span className="text-white/20 w-8 md:w-12 shrink-0 select-none text-right pr-4 md:pr-8 text-[9px] md:text-[10px] font-mono group-hover:text-white/30 transition-colors pt-1">
    {num}
  </span>
);

const SectionHeader = ({ icon: Icon, title, lineNum }) => (
  <div className="flex group mb-6">
    <LineNumber num={lineNum} />
    <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-3">
      {Icon && <Icon size={18} className="text-white/20" />}
      {title}
    </h2>
  </div>
);

const ResumeHeader = () => {
  const handleDownloadCV = () => {
    const cvFilePath = "Pranav_Resume.pdf";
    const link = document.createElement("a");
    link.href = cvFilePath;
    link.target = "_blank";
    link.download = "Pranav_Resume.pdf";
    link.click();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2 md:p-6 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between w-full max-w-5xl px-6 py-2 md:px-10 md:py-3 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl pointer-events-auto"
      >
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-white/40 hover:text-white transition-all hover:gap-3 shrink-0"
        >
          <ArrowLeft size={14} />
          <span className="hidden sm:inline">Return</span>
        </button>

        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] font-black text-white/60 truncate">
            Pranav.resume.md
          </span>
        </div>

        <button
          onClick={handleDownloadCV}
          className="flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-widest md:tracking-[0.2em] font-black bg-white text-black px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10 shrink-0"
        >
          <Download size={14} />
          <span>PDF</span>
        </button>
      </motion.div>
    </nav>
  );
};

const ViewResume = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/10 relative overflow-x-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <ResumeHeader />

      <main className="pt-[160px] md:pt-[200px] pb-40 relative z-10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto"
          >
            <div
              className="font-mono space-y-12 md:space-y-16 text-xs md:text-base leading-relaxed"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              {/* --- 01: INTRO --- */}
              <section className="space-y-4">
                <div className="flex group">
                  <LineNumber num="01" />
                  <h1 className="text-3xl md:text-6xl font-bold tracking-tighter wrap-break-word text-white">
                    {resumeData.name}
                  </h1>
                </div>
                <div className="flex group">
                  <LineNumber num="02" />
                  <span className="text-white/40 uppercase tracking-widest text-[10px] md:text-xs">
                    {resumeData.title} // {resumeData.location}
                  </span>
                </div>
                <div className="flex group pt-2">
                  <LineNumber num="03" />
                  <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 text-[10px] md:text-xs">
                    <a
                      href={`mailto:${resumeData.contact.email}`}
                      className="text-white/60 hover:text-white transition-colors underline decoration-white/10 underline-offset-4"
                    >
                      {resumeData.contact.email}
                    </a>
                    <a
                      href={`https://${resumeData.contact.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors underline decoration-white/10 underline-offset-4"
                    >
                      {resumeData.contact.github}
                    </a>
                    <a
                      href={`https://${resumeData.contact.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors underline decoration-white/10 underline-offset-4"
                    >
                      {resumeData.contact.linkedin}
                    </a>
                  </div>
                </div>
              </section>

              {/* --- 02: SUMMARY --- */}
              <section className="space-y-2">
                <div className="flex group text-white/20">
                  <LineNumber num="05" />
                  <span>/**</span>
                </div>
                <div className="flex group">
                  <LineNumber num="06" />
                  <p className="text-white/60 italic max-w-2xl border-l-2 border-white/5 pl-4 md:pl-6 ml-1 text-xs md:text-base">
                    {resumeData.summary}
                  </p>
                </div>
                <div className="flex group text-white/20">
                  <LineNumber num="10" />
                  <span> */</span>
                </div>
              </section>

              {/* --- 03: SKILLS --- */}
              <section>
                <SectionHeader
                  icon={Terminal}
                  title="Technical_Stack"
                  lineNum="12"
                />
                <div className="space-y-2">
                  {Object.entries(resumeData.skills).map(([key, val], i) => (
                    <div key={key} className="flex group">
                      <LineNumber num={13 + i} />
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                        <span className="text-white/30 text-[10px] md:text-xs min-w-[120px] md:min-w-[140px]">
                          {key}:
                        </span>
                        <span className="text-white/80 text-xs md:text-base">
                          {val}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- 04: EXPERIENCE --- */}
              <section>
                <SectionHeader
                  icon={Code2}
                  title="Work_Experience"
                  lineNum="20"
                />
                <div className="space-y-12">
                  {resumeData.experience.map((job, i) => (
                    <div key={job.company} className="space-y-4">
                      <div className="flex group">
                        <LineNumber num={22 + i * 10} />
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between w-full border-b border-white/15 pb-2 gap-1">
                          <span className="text-base md:text-lg font-bold text-white">
                            {job.company}
                          </span>
                          <span className="text-[10px] md:text-xs text-white/40">
                            {job.period}
                          </span>
                        </div>
                      </div>
                      <div className="flex group">
                        <LineNumber num={23 + i * 10} />
                        <span className="text-[10px] md:text-xs text-white/30 tracking-widest uppercase">
                          {job.role} // {job.location}
                        </span>
                      </div>
                      {job.highlights.map((point, pi) => (
                        <div key={pi} className="flex group">
                          <LineNumber num={24 + pi + i * 10} />
                          <div className="flex gap-3 md:gap-4">
                            <span className="text-white/20 shrink-0">-</span>
                            <span className="text-white/60 text-xs md:text-base">
                              {point}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>

              {/* --- 05: PROJECTS --- */}
              <section>
                <SectionHeader
                  icon={FolderCode}
                  title="Featured_Projects"
                  lineNum="80"
                />
                <div className="space-y-12">
                  {resumeData.projects.map((project, i) => (
                    <div key={project.name} className="space-y-4">
                      <div className="flex group">
                        <LineNumber num={82 + i * 12} />
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between w-full border-b border-white/15 pb-2 gap-1">
                          <div className="flex items-center gap-4">
                            <span className="text-base md:text-lg font-bold text-white">
                              {project.name}
                            </span>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] text-white/40 hover:text-white transition-colors border border-white/10 px-2 py-0.5 rounded uppercase tracking-widest"
                            >
                              Live_Link
                            </a>
                          </div>
                          <span className="text-[10px] md:text-xs text-white/40">
                            {project.tech}
                          </span>
                        </div>
                      </div>
                      <div className="flex group">
                        <LineNumber num={83 + i * 12} />
                        <span className="text-[10px] md:text-xs text-white/30 italic">
                          {project.desc}
                        </span>
                      </div>
                      {project.highlights.map((point, pi) => (
                        <div key={pi} className="flex group">
                          <LineNumber num={84 + pi + i * 12} />
                          <div className="flex gap-3 md:gap-4">
                            <span className="text-white/20 shrink-0">*</span>
                            <span className="text-white/60 text-xs md:text-base">
                              {point}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>

              {/* --- 06: EDUCATION --- */}
              <section className="pt-12 border-t border-white/15">
                <SectionHeader
                  icon={GraduationCap}
                  title="Education"
                  lineNum="110"
                />
                <div className="flex group">
                  <LineNumber num="112" />
                  <div className="flex flex-col gap-1">
                    <span className="text-white/80 font-bold text-sm md:text-base">
                      {resumeData.education.institution}
                    </span>
                    <span className="text-[10px] md:text-sm text-white/60">
                      {resumeData.education.degree}
                    </span>
                    <span className="text-[10px] text-white/30">
                      {resumeData.education.period}
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ViewResume;
