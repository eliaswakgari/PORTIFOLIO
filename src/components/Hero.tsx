import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Github, Linkedin, Facebook, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const fullText = " Elias ";

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
      color: "from-gray-400 to-gray-600",
      hoverColor: "hover:from-white hover:to-gray-300"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:from-blue-400 hover:to-blue-600"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/yourusername",
      label: "Facebook",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700"
    }
  ];

  // Star data for animated background: many light stars with different sizes
  const stars = Array.from({ length: 70 }, (_, i) => ({
    id: i,
    size: Math.random() * 2.2 + 1, // small, subtle dots
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: [
      'bg-purple-300',
      'bg-pink-300',
      'bg-blue-300',
      'bg-cyan-300',
      'bg-yellow-300',
      'bg-emerald-300'
    ][Math.floor(Math.random() * 6)],
    // a bit faster twinkle, still smooth
    duration: 3 + Math.random() * 1.5,
    delay: Math.random() * 2
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(fullText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-0 pb-16 sm:pb-20"
    >
      {/* Enhanced Animated Background with Stars */}
      <div className="absolute inset-0 z-0">
        {/* Large gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-3/4 left-1/3 w-56 h-56 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-52 h-52 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Animated Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className={`absolute rounded-full ${star.color} opacity-70`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.25, 0.95, 0.25],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 border-2 border-purple-400/30 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-12 h-12 border-2 border-pink-400/30 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1.2, 0.8, 1.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-40 w-8 h-8 border-2 border-blue-400/30 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10 flex-1 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white">
                Hi, I'm
              </h1>

              {/* Animated Name */}
              <div className="min-h-[96px] sm:min-h-[120px] lg:min-h-[140px] flex items-center justify-center lg:justify-start mb-6 sm:mb-8">
                <motion.div
                  className="text-4xl lg:text-6xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.45)]">
                    {displayText}
                  </span>
                  <span className="animate-pulse text-purple-400">|</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Title and Location */}
            <motion.div
              className="space-y-4 sm:space-y-6 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90">
                MERN Stack Developer
              </h2>
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-lg text-white/70">
                <MapPin size={24} className="text-purple-400" />
                <span className="text-xl">Based in Ethiopia</span>
              </div>
            </motion.div>

            {/* Enhanced Description Paragraph - Split into 2 lines */}
            <motion.div
              className="mt-6 sm:mt-8 mb-4 sm:mb-6 space-y-3 sm:space-y-4"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: "easeOut"
              }}
            >
              <motion.p
                className="text-base sm:text-lg lg:text-2xl text-white/80 leading-relaxed font-light tracking-wide text-center lg:text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                I'm a passionate full-stack developer who turns innovative ideas into scalable
              </motion.p>
              <motion.p
                className="text-base sm:text-lg lg:text-2xl text-white/80 leading-relaxed font-light tracking-wide text-center lg:text-left"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                digital solutions.
              </motion.p>
            </motion.div>

            {/* Social Media Icons - inline with text, centered left */}
            <motion.div
              className="mt-4 sm:mt-6 flex justify-center lg:justify-start gap-4 sm:gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    relative group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full
                    bg-gradient-to-br ${social.color}
                    shadow-lg backdrop-blur-sm border border-white/20
                    transition-all duration-300 transform hover:scale-110 hover:shadow-xl
                  `}
                  whileTap={{ scale: 0.94 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.3 + index * 0.12,
                    type: "spring",
                    stiffness: 260
                  }}
                >
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${social.color} blur-md opacity-0 group-hover:opacity-40 transition-all duration-300 -z-10`}
                  />
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <social.icon className="text-white" size={20} />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image - Clear and Visible */}
          <motion.div
            className="lg:w-1/2 flex justify-center mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-5"></div>

              {/* Main Image Container - Clear and Visible */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
                <img
                  src="/assets/eli.jpg"
                  alt="Elias Walkgari - MERN Stack Developer"
                  className="w-full h-full object-cover brightness-105 contrast-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />

                {/* Subtle Animated Border */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-400/50 via-pink-400/50 to-blue-400/50 bg-[length:200%_100%] animate-gradient-x"></div>
              </div>

              {/* Enhanced Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl shadow-purple-500/50"
                animate={{
                  y: [0, -25, 0],
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-2xl shadow-blue-500/50"
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.4, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
              <motion.div
                className="absolute top-4 -left-12 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl shadow-yellow-500/50"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;