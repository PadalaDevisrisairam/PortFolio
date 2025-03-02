import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa"; // Import the graduation cap icon

const educationData = [
  {
    title: "BSEAP",
    institution: "Roots School of Essential Faculties, Tanuku",
    duration: "2019-2020",
    score: "Score: 98%",
  },
  {
    title: "BIEAP",
    institution: "Sasi Junior College, Tanuku",
    duration: "2020-2022",
    score: "Score: 95%",
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    institution: "Sasi Institute of Technology and Engineering",
    duration: "2022-2026",
    score: "Current Score: 90%",
  },
];

function Educationpage() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen  bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white px-6 md:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-10 text-center tracking-wide text-white" // Changed heading color to white
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        Education
      </motion.h1>

      {/* Education Cards with Sequential Animation */}
      <div className="flex flex-col space-y-8 w-full max-w-4xl">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-300 text-white" // Ensures text remains white
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3.8, delay: index * 0.4 }} // Sequential animation
            whileHover={{
              backgroundColor: "indigo", // Blue background color
              color: "#fff", // All text remains white
              scale: 1.05,
              transition: { duration: 4.9 }, // Smooth transition
            }}
          >
            {/* Left - React Icon (Graduation Cap) */}
            <FaGraduationCap className="text-white text-6xl md:text-7xl mr-6" /> {/* Icon color set to white */}

            {/* Right - Education Details */}
            <div className="flex flex-col text-left">
              <h2 className="text-2xl font-semibold">{edu.title}</h2> {/* Title text remains white */}
              <p className="text-lg">{edu.institution}</p>
              <p className="text-md">{edu.duration} | {edu.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Educationpage;
