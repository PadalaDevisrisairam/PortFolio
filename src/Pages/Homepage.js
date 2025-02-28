import React from "react";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 text-white px-6 md:px-20">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-4xl md:text-6xl font-bold mb-4 text-gradient"
        >
          Hello, this is Sai
        </motion.h1>

        <h2 className="text-2xl md:text-4xl font-semibold">
          I'm a{" "}
          <span className="text-blue-400">
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Problem Solver",
                "Decision Maker",
                "Lifelong Learner",
              ]}
              typeSpeed={50}
              backSpeed={40}
              loop
            />
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="mt-5 text-xl font-semibold text-white-800 dark:text-white text-center"
        >
          A passionate MERN stack developer with a keen interest in DevOps,
          problem-solving, and building scalable web applications to solve
          real-world problems efficiently.
        </motion.p>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start mt-6 space-x-6">
          <a
            href="https://www.linkedin.com/in/padala-devisrisairam-a575b3280/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/PadalaDevisrisairam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-100 text-3xl"
          >
            
            <FaGithub />
          </a>
          <a
            href="https://x.com/SaiRam09072004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-3xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/your-instagram-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 text-3xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-10 md:mt-0 md:ml-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative group"
      >
        {/* Profile Image */}
        <img
          src="/portfoliopic2.jpg" // Update with your actual image path
          alt="Sai Profile"
          className="w-96 h-96 md:w-[400px] md:h-[400px] rounded-full shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
        />

        {/* Glowing Border Animation */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent animate-glow transition-all duration-300 ease-in-out group-hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]"></div>
      </motion.div>
    </div>
    </div>
  );
};

export default Homepage;