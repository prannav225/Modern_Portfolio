"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AboutSection = () => {
  const experiences = [
    {
      index: "01",
      company: "BeePrecise",
      role: "Software Developer",
      period: "Oct 2023 – Nov 2025",
      desc: "Built real-time IoT monitoring dashboards for beehive systems, visualizing live sensor metrics and integrating ML prediction models for hive health classification.",
    },
    {
      index: "02",
      company: "Electronix AI",
      role: "Founding Team",
      period: "Jan 2025 – Nov 2025",
      desc: "Contributed to product vision, workflows, initial feature architecture for a SaaS platform, and led technical hiring & onboarding.",
    },
    {
      index: "03",
      company: "Freelance Developer",
      role: "Web Consultant",
      period: "Dec 2025 – Present",
      desc: "Designing and developing production-grade web applications & client websites focused on performance, accessibility, and modern UI.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-40 relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-20">
          {/* Section Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.5em] font-black text-white/20 mb-4 block"
            >
              Profile / 01
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-8"
            >
              The <br className="hidden md:block" />{" "}
              <span className="text-white/20">Creative</span>{" "}
              <br className="hidden md:block" /> System.
            </motion.h2>
            <p className="text-white/40 leading-relaxed font-light text-base md:text-lg max-w-sm italic">
              “Building scalable web systems through thoughtful design, clean
              code, and performance-first engineering.”
            </p>
          </div>

          {/* About Content */}
          <div className="lg:col-span-8 space-y-24 md:space-y-32">
            {/* Massive Bio */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl md:text-4xl font-light text-white leading-snug md:leading-[1.2] tracking-tight"
              >
                I’m <span className="text-white/40 font-semibold">Naga Pranav M</span>, a
                software developer based in Bengaluru with 2+ years of experience building high-performance, real-time web applications using{" "}
                <span className="text-white/40 italic">React, Next.js & TypeScript</span>.
              </motion.p>

              <div className="mt-16 flex flex-wrap items-center gap-12">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20">
                    Based
                  </span>
                  <span className="text-sm font-light text-white/60">
                    Bengaluru, India / 12.9°N 77.5°E
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20">
                    Status
                  </span>
                  <span className="text-sm font-light text-white/60">
                    Available for Hire
                  </span>
                  <span className="text-[10px] font-medium text-white/20 uppercase tracking-widest">
                    Freelance • Full-time • Contract
                  </span>
                </div>
              </div>
            </div>

            {/* Structured Info Grid */}
            <div className="pt-16 border-t border-white/10">
              <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-14">
                {/* Career History Column */}
                <div className="space-y-8">
                  <span className="text-[10px] uppercase tracking-[0.5em] font-black text-white/30 block mb-6">
                    Career Experience
                  </span>

                  {experiences.map((exp) => (
                    <motion.div
                      key={exp.company}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group pt-6 border-t border-white/10 hover:border-white/30 transition-all duration-300"
                    >
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
                          {exp.company}
                        </h4>
                        <span className="text-[10px] font-mono text-white/40 tracking-wider">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs text-white/40 uppercase tracking-widest font-mono font-medium mb-3">
                        {exp.role}
                      </p>
                      <p className="text-white/60 font-light text-sm leading-relaxed">
                        {exp.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Technical Stack Column */}
                <div className="space-y-8">
                  <span className="text-[10px] uppercase tracking-[0.5em] font-black text-white/30 block mb-6">
                    Technical Stack
                  </span>

                  {/* Core Foundations */}
                  <div className="pt-6 border-t border-white/10">
                    <span className="text-[11px] uppercase tracking-[0.3em] font-mono font-bold text-white/40 block mb-4">
                      / Core & Frontend
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React.js",
                        "Next.js",
                        "TypeScript",
                        "JavaScript (ES6+)",
                        "Tailwind CSS",
                        "Framer Motion",
                        "Zustand",
                        "React Context API",
                        "Vite",
                        "HTML5 / CSS3",
                      ].map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1.5 bg-white/5 hover:bg-white hover:text-black border border-white/10 rounded-full text-xs font-mono text-white/80 transition-all duration-300 cursor-default"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend & Systems */}
                  <div className="pt-6 border-t border-white/10">
                    <span className="text-[11px] uppercase tracking-[0.3em] font-mono font-bold text-white/40 block mb-4">
                      / Backend & Infrastructure
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Node.js",
                        "Express.js",
                        "WebRTC",
                        "Socket.IO",
                        "REST APIs",
                        "Supabase",
                        "Git / GitHub",
                        "Vercel",
                        "Netlify",
                        "Figma",
                        "Docker",
                      ].map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1.5 bg-white/5 hover:bg-white hover:text-black border border-white/10 rounded-full text-xs font-mono text-white/80 transition-all duration-300 cursor-default"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
