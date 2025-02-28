import React from "react";
import { FaCode, FaBrain, FaTrophy, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const Aboutpage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 md:px-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg text-gray-300 text-center max-w-2xl mb-10"
      >
        I'm a passionate Full-Stack Developer and third-year Computer Science Engineering student, dedicated to creating efficient and scalable web solutions. With a strong foundation in problem-solving, I approach each project with a problem-solving mindset.
      </motion.p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)" }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-3">
            <FaCode className="text-4xl text-blue-400" />
            <h2 className="text-2xl font-semibold">Full Stack Development</h2>
          </div>
          <p className="text-gray-300">I am a developer.</p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 2, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 165, 0, 0.8)" }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-3">
            <FaBrain className="text-4xl text-orange-400" />
            <h2 className="text-2xl font-semibold">Problem Solver</h2>
          </div>
          <p className="text-gray-300">Good problem solver.</p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 2, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.8)" }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-3">
            <FaTrophy className="text-4xl text-yellow-400" />
            <h2 className="text-2xl font-semibold">Achievements</h2>
          </div>
          <p className="text-gray-300">Achieved multiple certifications and done internships.</p>
        </motion.div>

        {/* Section 4 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 2, delay: 0.9, repeat: Infinity, repeatType: "reverse" }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0, 255, 0, 0.8)" }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-3">
            <FaLightbulb className="text-4xl text-green-400" />
            <h2 className="text-2xl font-semibold">Innovation</h2>
          </div>
          <p className="text-gray-300">Passionate about creating innovative solutions to complex problems.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutpage;
