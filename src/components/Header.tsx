import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      // For the hero section, align directly with the top (no extra offset)
      const offset = href === '#home' ? 0 : 80;
      const elementPosition = (element as HTMLElement).getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out h-[10vh] min-h-[80px] flex items-center ${isScrolled
          ? 'bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-2xl border-b border-gray-200/50 shadow-2xl shadow-purple-500/10'
          : 'bg-white/95 backdrop-blur-2xl border-b border-gray-200/30 shadow-lg'
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="w-full max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 ml-2 sm:ml-4 lg:ml-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${isScrolled
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 shadow-purple-500/40'
                    : 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-purple-500/30'
                    }`}
                >
                  <span className="text-white font-bold text-lg">EW</span>
                </div>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 -z-10"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
              <div>
                <motion.a
                  href="#home"
                  className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }}
                >
                  Elias.W
                </motion.a>
                <motion.p
                  className="text-xs font-medium mt-1 text-gray-600"
                >
                  MERN Stack Developer
                </motion.p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-around flex-1 max-w-2xl mr-4 lg:mr-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                >
                  <motion.a
                    href={item.href}
                    className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 group ${activeSection === item.href.slice(1)
                      ? 'text-purple-700 bg-purple-50/80 shadow-lg shadow-purple-500/20'
                      : 'text-gray-700 hover:text-purple-700 hover:bg-gray-50/80'
                      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative">
                      {item.name}
                      <motion.span
                        className={`absolute -bottom-1 left-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ${activeSection === item.href.slice(1)
                          ? 'w-full h-1'
                          : 'w-0 h-0.5 group-hover:w-full'
                          }`}
                        layoutId="activeSection"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    </span>
                  </motion.a>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-3 rounded-xl transition-all duration-300 mr-2 flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.93 }}
              onClick={() => setIsMenuOpen(true)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-full bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-2xl border-l border-gray-200/50 shadow-2xl z-50 lg:hidden"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
                duration: 0.5
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Elias.W
                  </div>
                </motion.div>

                <motion.button
                  className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="font-bold text-xl">×</span>
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="p-6 space-y-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between w-full p-4 rounded-xl font-semibold transition-all duration-300 group ${activeSection === item.href.slice(1)
                      ? 'text-purple-700 bg-purple-50/80 shadow-lg'
                      : 'text-gray-700 hover:text-purple-700 hover:bg-gray-50/80'
                      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                      setIsMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <span>{item.name}</span>
                    <motion.div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 ${activeSection === item.href.slice(1)
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-100'
                        } transition-opacity duration-300`}
                    />
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;