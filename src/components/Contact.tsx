import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:wakgarielias4@gmail.com?subject=${encodeURIComponent(
      "New Message from " + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" });
    alert("Your message is ready to send via email!");
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start md:items-center">
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-5 sm:space-y-6 mb-10 md:mb-0"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">Contact Me</h2>
          <p className="text-gray-300/90 mb-4 max-w-xl text-sm sm:text-base">
            I'm always open to discuss your projects or opportunities. Drop me a
            message and I will get back to you!
          </p>

          <div className="flex items-center mb-3 space-x-3 sm:space-x-4 hover:text-pink-500 transition">
            <Mail className="text-pink-500" />
            <span>wakgarielias4@gmail.com</span>
          </div>

          <div className="flex items-center mb-6 space-x-3 sm:space-x-4 hover:text-pink-500 transition">
            <Phone className="text-pink-500" />
            <span>+251 912 345 678</span>
          </div>

          <div className="flex space-x-4 sm:space-x-5">
            <a
              href="#"
              className="hover:text-pink-500 transition transform hover:scale-110"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition transform hover:scale-110"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <a
            href="/assets/Elias_Wakgari_CV.pdf"
            download
            className="mt-6 inline-block bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3 rounded-full text-black font-semibold hover:from-pink-400 hover:to-purple-400 transition transform hover:scale-105 shadow-lg shadow-pink-500/40"
          >
            Download CV
          </a>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl shadow-pink-500/20 border border-white/10"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Send me a message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5 sm:space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-200">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-800/80 p-3 sm:p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500/80 transition text-sm sm:text-base"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-200">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800/80 p-3 sm:p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500/80 transition text-sm sm:text-base"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-200">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or question..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-800/80 p-3 sm:p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500/80 transition text-sm sm:text-base resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 transition px-6 py-3 rounded-full font-semibold flex items-center justify-center transform hover:scale-105 shadow-lg shadow-pink-500/40"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
