import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from './data/portfolioData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden"
    style={{margin:"20px 30px",padding:"30px 20px"}}>
      <div className="container mx-auto px-6 relative z-10"
      style={{padding:"30px 20px"}}
      >
        {/* Section Header */}
        <motion.h2 
          className="text-5xl md:text-6xl font-black text-center mb-4 bg-gradient-to-r from-purple-300 via-pink-400 to-purple-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{padding:"60px 20px"}}
        >
          My Projects
        </motion.h2>
        <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-16 rounded-full" />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 bg-slate-800/40 backdrop-blur-xl border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              {/* Project Image & Hover Overlay */}
              <div className={`relative h-56 bg-gradient-to-r ${project.gradient} overflow-hidden`}>
                <img 
                  src="/assets/eli.jpg/"
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-105 group-hover:brightness-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-center mb-4">{project.description.split(' ').slice(0, 12).join(' ')}...</p>
                  <div className="flex space-x-3">
                    <motion.a 
                      href={project.demoLink} 
                      className="px-4 py-2 bg-white text-purple-600 rounded-full font-medium flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} className="mr-1" /> Demo
                    </motion.a>
                    <motion.a 
                      href={project.codeLink} 
                      className="px-4 py-2 border border-white text-white rounded-full font-medium flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} className="mr-1" /> Code
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm font-medium backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a 
            href="#" 
            className="inline-flex items-center px-8 py-3 rounded-full font-medium bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-500"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects <ExternalLink className="ml-2" size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
