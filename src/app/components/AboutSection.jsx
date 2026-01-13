"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AboutSection = () => {
  const experiences = [
    {
      company: "BeePrecise",
      role: "Software Developer",
      period: "2023 – 2025",
      desc: "IoT beehive monitoring & AI dashboards.",
    },
    {
      company: "Freelance",
      role: "Consultant",
      period: "2024 – Present",
      desc: "Enterprise-grade architecture for agile startups.",
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
              "Solving complex architectural challenges through minimalist
              design and high-performance engineering."
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
                I am <span className="text-white/40">Naga Pranav M</span>, a
                software developer based in Bengaluru. I specialize in bridging
                the gap between{" "}
                <span className="text-white/40 underline decoration-white/10 underline-offset-8">
                  enterprise reliability
                </span>{" "}
                and
                <span className="text-white/40 italic"> agile execution</span>.
              </motion.p>

              <div className="mt-16 flex items-center gap-12">
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
                    Available for 2026 Collaboration
                  </span>
                </div>
              </div>
            </div>

            {/* Structured Info Grid */}
            <div className="grid md:grid-cols-2 gap-20 pt-20 border-t border-white/5">
              {/* Experience */}
              <div className="space-y-12">
                <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-white/20">
                  Career History
                </h4>
                <div className="space-y-10">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={i}
                      className="group p-8 bg-white/2 backdrop-blur-3xl border border-white/5 rounded-3xl transition-all hover:bg-white/5 hover:border-white/10"
                    >
                      <div className="flex justify-between items-end mb-2">
                        <h5 className="text-xl font-bold">{exp.company}</h5>
                        <span className="text-[10px] font-mono text-white/30">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-white/20 uppercase tracking-widest font-medium mb-4">
                        {exp.role}
                      </p>
                      <p className="text-white/40 font-light leading-relaxed">
                        {exp.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills / Tech */}
              <div className="space-y-12">
                <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-white/20">
                  Technical Stack
                </h4>
                <div className="flex flex-col gap-6">
                  <div className="p-8 bg-white/2 backdrop-blur-3xl border border-white/5 rounded-3xl">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/10 block mb-6">
                      Core Foundations
                    </span>
                    <div className="flex flex-wrap gap-4">
                      {[
                        "React / Next.js",
                        "TypeScript",
                        "Node.js",
                        "Tailwind",
                      ].map((s) => (
                        <span
                          key={s}
                          className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-xs font-light text-white/60"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 bg-white/2 backdrop-blur-3xl border border-white/5 rounded-3xl">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/10 block mb-6">
                      Advanced Systems
                    </span>
                    <div className="flex flex-wrap gap-4">
                      {["WebRTC", "Socket.IO", "CI / CD", "AI Integration"].map(
                        (s) => (
                          <span
                            key={s}
                            className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-xs font-light text-white/60"
                          >
                            {s}
                          </span>
                        )
                      )}
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
