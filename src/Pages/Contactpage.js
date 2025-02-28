import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Moving animation when page loads
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white px-6 md:px-20"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-20 text-center"
      >
        Get in Touch
      </motion.h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        
        {/* Left Section - Contact Info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">Let's Connect</h2>
          <p className="text-lg text-gray-300">I'm always open for new projects.</p>

          {/* Contact Links */}
          <div className="space-y-4">
            <p className="flex items-center space-x-3 text-lg hover:text-red-400">
              <FaEnvelope className="text-2xl text-red-500" />
              <span>padaladevisrisairam@gmail.com</span>
            </p>

            <a
              href="https://github.com/PadalaDevisrisairam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-lg hover:text-gray-300"
            >
              <FaGithub className="text-2xl text-gray-300" />
              <span>github.com/PadalaDevisrisairam</span>
            </a>

            <a
              href="https://www.linkedin.com/in/padala-devisrisairam-a575b3280/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-lg hover:text-blue-400"
            >
              <FaLinkedin className="text-2xl text-blue-500" />
              <span>linkedin.com/in/padala-devisrisairam-a575b3280</span>
            </a>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.7)",
          }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg w-full transition duration-300"
        >
          <form>
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-gray-300 text-sm mb-2">Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400 transition duration-300 hover:scale-105"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-300 text-sm mb-2">Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400 transition duration-300 hover:scale-105"
                required
              />
            </div>

            {/* Message Input */}
            <div className="mb-4">
              <label className="block text-gray-300 text-sm mb-2">Message:</label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400 transition duration-300 hover:scale-105"
                required
              ></textarea>
            </div>

            {/* Send Message Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="w-full bg-indigo-800 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ContactPage;
