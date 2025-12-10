import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Facebook,
  Twitter,
  Mail,
  Heart,
  MapPin,
  ExternalLink
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/yourusername",
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
      color: "hover:text-cyan-400"
    },
    {
      icon: Mail,
      href: "mailto:wakgarielias4@gmail.com",
      label: "Email",
      color: "hover:text-red-400"
    }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="min-h-[50vh] bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 relative overflow-hidden border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10 h-full">
        <div className="flex flex-col h-full py-12 sm:py-16">
          {/* Main Footer Content */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 mb-12 min-h-[50vh]">
            {/* Brand Section */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.a
                href="#"
                className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent inline-block mb-4"
                whileHover={{ scale: 1.05 }}
                onClick={scrollToTop}
              >
                Elias.W
              </motion.a>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                MERN Stack Developer & Software Engineering Student at Haramaya University
              </p>

              {/* Location */}
              <div className="flex items-center justify-center lg:justify-start text-white/60 mb-6">
                <MapPin size={18} className="mr-2 text-purple-400" />
                <span>Haramaya University, Ethiopia</span>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center text-white/70 ${social.color} transition-all duration-300 group relative`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <social.icon size={20} />
                    {/* Tooltip */}
                    <div
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {social.label}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <div className="space-y-3">
                {footerLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="block text-white/60 hover:text-white transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    <span className="flex items-center">
                      <ExternalLink size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white/60 text-sm mb-1">Email</p>
                  <a href="mailto:wakgarielias4@gmail.com" className="text-white hover:text-purple-400 transition-colors">
                    wakgarielias4@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Phone</p>
                  <a href="tel:+251912345678" className="text-white hover:text-purple-400 transition-colors">
                    +251 912 345 678
                  </a>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Availability</p>
                  <p className="text-white">Open for Freelance Projects</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-white/10 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 flex items-center justify-center">
                © {currentYear} Made with <Heart size={16} className="mx-1 text-pink-500" /> by Elias Walkgari
              </p>

              <div className="flex items-center space-x-6 text-white/60 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="mt-6 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 mx-auto"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              ↑
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;