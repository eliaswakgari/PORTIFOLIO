import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { about, experience, education } from "./data/portfolioData"; // adjust path

const tabs = ["Skills", "Experience", "Education"] as const;
type Tab = (typeof tabs)[number];

const About: React.FC = () => {
  const [active, setActive] = useState<Tab>("Skills");

  // Floating particles (optional subtle effect)
  const particles = Array.from({ length: 20 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="about"
      className="relative overflow-hidden text-white py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 min-h-[90vh]"
    >
      {/* Hero-style animated background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Animated stars */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{ y: [0, -10, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3 + i * 0.2, repeat: Infinity, delay: p.delay }}
          />
        ))}

        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 border-2 border-purple-400/30 rounded-lg"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-12 h-12 border-2 border-pink-400/30 rounded-full"
          animate={{ rotate: [360, 0], scale: [1.2, 0.8, 1.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-2/6 flex justify-center lg:justify-start"
          >
            <div className="rounded-3xl overflow-hidden w-80 h-[420px] lg:w-[420px] lg:h-[520px] bg-[#111111] border border-white/6 shadow-[0_10px_30px_rgba(0,0,0,0.7)] relative">
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-black/40 to-white/2 border border-white/6" />
              <img
                src="/assets/eli.jpg"
                alt="Elias Wakgari"
                className="relative w-full h-full object-cover rounded-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-4/6"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">About Me</h2>
            <p className="mt-4 text-white/70 text-lg max-w-3xl">{about.description}</p>

            {/* Tabs */}
            <div className="mt-8">
              <div className="flex items-end gap-8 border-b border-white/10 pb-3">
                {tabs.map((t) => {
                  const isActive = t === active;
                  return (
                    <button
                      key={t}
                      onClick={() => setActive(t)}
                      className={`relative pb-2 text-lg md:text-xl font-medium focus:outline-none ${isActive ? "text-white" : "text-white/60"
                        }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {t}
                      {isActive && (
                        <motion.span
                          layoutId="tab-underline"
                          className="absolute left-0 -bottom-3 h-0.5 bg-red-500 rounded"
                          style={{ width: "100%" }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Tab content */}
              <div className="mt-7">
                <AnimatePresence mode="wait">
                  {active === "Skills" && (
                    <motion.div
                      key="skills"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {about.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="rounded-md bg-white/6 px-3 py-2 text-center text-sm md:text-base font-medium hover:bg-white/10 transition"
                          >
                            {h}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {active === "Experience" && (
                    <motion.div
                      key="experience"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="space-y-6">
                        {experience.map((e, i) => (
                          <div key={i} className="flex gap-6">
                            <div className="min-w-[110px]">
                              <p className="text-red-400 font-semibold">{e.period}</p>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">{e.role}</h3>
                              <p className="text-white/70 italic">{e.company}</p>
                              <p className="mt-2 text-white/80">{e.description}</p>
                              {e.projects && <p className="mt-2 text-sm text-white/60">Projects: {e.projects.join(", ")}</p>}
                              {e.technologies && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {e.technologies.map((t, idx) => (
                                    <span key={idx} className="text-sm bg-white/6 px-2 py-1 rounded-md">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {active === "Education" && (
                    <motion.div
                      key="education"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="space-y-6">
                        {education.map((ed, i) => (
                          <div key={i} className="flex gap-6">
                            <div className="min-w-[110px]">
                              <p className="text-red-400 font-semibold">{ed.year}</p>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">{ed.degree}</h3>
                              <p className="text-white/70 italic">{ed.institution}</p>
                              <p className="mt-2 text-white/80">{ed.description}</p>
                              {ed.courses && (
                                <ul className="mt-3 list-disc list-inside text-white/70 space-y-1">
                                  {ed.courses.map((c, ci) => (
                                    <li key={ci} className="text-sm">{c}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
