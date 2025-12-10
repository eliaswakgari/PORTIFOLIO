import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { technicalSkills, professionalSkills } from "../data/portfolioData";
import { Code, Database, Server, Cpu, Smartphone, Cloud } from "lucide-react";

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS",
      gradient: "from-blue-500 to-cyan-500",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Express, MongoDB",
      gradient: "from-green-500 to-emerald-500",
      tech: ["Node.js", "Express", "MongoDB", "REST APIs"]
    },
    {
      icon: Database,
      title: "Database Design",
      description: "MongoDB, MySQL, PostgreSQL",
      gradient: "from-purple-500 to-pink-500",
      tech: ["MongoDB", "MySQL", "Redis"]
    },
    {
      icon: Cpu,
      title: "State Management",
      description: "Redux Toolkit, Context API",
      gradient: "from-orange-500 to-red-500",
      tech: ["Redux Toolkit", "Context API"]
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first, Cross-browser",
      gradient: "from-indigo-500 to-purple-500",
      tech: ["Mobile First", "Cross-browser"]
    },
    {
      icon: Cloud,
      title: "Deployment",
      description: "Vercel, Netlify, Render",
      gradient: "from-teal-500 to-blue-500",
      tech: ["Vercel", "Netlify", "Render",]
    }
  ];

  const SkillBar: React.FC<{ skill: { name: string; percentage: number } }> = ({ skill }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-2 font-medium text-white/90">
          <span>{skill.name}</span>
          <span>{skill.percentage}%</span>
        </div>
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-3 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="py-32 md:py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden"
      ref={ref}
      style={{ margin: "100px 50px", padding: "50px" }}
    >

      {/* Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-purple-300 via-pink-400 to-purple-300 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="mx-auto w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4"></div>
        </motion.div>

        {/* Technical & Professional Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl shadow-purple-500/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl shadow-purple-500/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Professional Skills</h3>
            {professionalSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <motion.div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What I <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Do</span>
            </h3>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              I specialize in modern web technologies to deliver visually stunning, high-performance digital products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Glow & Hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300 -z-10`} />

                {/* Service Card */}
                <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-xl border border-white/10 p-8 h-full group-hover:border-white/30 transition-all duration-500 overflow-hidden shadow-lg">
                  {/* Icon */}
                  <div className={`relative z-10 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h4>
                    <p className="text-white/70 text-lg mb-3 font-light">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm font-medium backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r ${service.gradient} bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x -z-5`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
