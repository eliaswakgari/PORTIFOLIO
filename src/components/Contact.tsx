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
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex items-center py-20 px-6"
      style={{ minHeight: "100vh" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-6"
        >
          <h2 className="text-5xl font-bold mb-6">Contact Me</h2>
          <p className="text-gray-300 mb-4">
            I'm always open to discuss your projects or opportunities. Drop me a
            message and I will get back to you!
          </p>

          <div className="flex items-center mb-3 space-x-4 hover:text-pink-500 transition">
            <Mail className="text-pink-500" />
            <span>wakgarielias4@gmail.com</span>
          </div>

          <div className="flex items-center mb-6 space-x-4 hover:text-pink-500 transition">
            <Phone className="text-pink-500" />
            <span>+251 912 345 678</span>
          </div>

          <div className="flex space-x-5">
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
            className="mt-8 inline-block bg-pink-500 px-8 py-3 rounded-full text-black font-semibold hover:bg-pink-600 transition transform hover:scale-105"
          >
            Download CV
          </a>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 p-8 rounded-2xl shadow-xl"
        >
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-800 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="bg-gray-800 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              required
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 transition px-6 py-3 rounded-full font-semibold flex items-center justify-center transform hover:scale-105"
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
