import React from "react";
import { motion } from "framer-motion";
import { FaMedal, FaTrophy, FaUserGraduate, FaChartLine } from "react-icons/fa";

const Codechefpage = () => {
  const codechefProfile = "https://www.codechef.com/users/devisrisairam";
  const activityHeatmap = "codechefmap.png";
  const additionalImage = "codechefprogress.png";
  const performanceImage = "codechefdetails.png";

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 md:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 text-center tracking-wide shadow-lg shadow-yellow-500"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        My CodeChef Journey
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <motion.div className="flex flex-col items-center space-y-6">
          <motion.a
            href={codechefProfile}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.8)" }}
            animate={{ y: [0, -5, 5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <img
              src={performanceImage}
              alt="CodeChef Performance Overview"
              className="w-full max-w-md rounded-lg shadow-lg shadow-blue-500"
            />
          </motion.a>

          <motion.a
            href={codechefProfile}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 69, 0, 0.8)" }}
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <img
              src={activityHeatmap}
              alt="CodeChef Activity Heatmap"
              className="w-full max-w-md rounded-lg shadow-lg shadow-orange-500"
            />
          </motion.a>
        </motion.div>

        <motion.a
          href={codechefProfile}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 255, 0, 0.8)" }}
          animate={{ x: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img
            src={additionalImage}
            alt="CodeChef Additional Stats"
            className="w-full max-w-md rounded-lg shadow-lg shadow-green-500"
          />
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        <motion.div
          className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-6 shadow-yellow-500"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.8)" }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <h2 className="text-3xl font-semibold text-center text-yellow-400">CodeChef Progress</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <FaMedal className="text-6xl text-yellow-500" />
              <p className="text-xl font-semibold mt-2">⭐ 1 Star Coder</p>
            </div>
            <div className="flex flex-col items-center">
              <FaTrophy className="text-6xl text-orange-500" />
              <p className="text-xl font-semibold mt-2">600+ Problems</p>
            </div>
            <div className="flex flex-col items-center">
              <FaChartLine className="text-6xl text-green-500" />
              <p className="text-xl font-semibold mt-2">Best Rating: 1107</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUserGraduate className="text-6xl text-blue-400" />
              <p className="text-xl font-semibold mt-2">30+ Contests</p>
            </div>
          </div>
          <a
            href={codechefProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-blue-400 transition duration-10s"
          >
            View My Profile
          </a>
        </motion.div>

        <motion.div
          className="bg-gray-800 p-8 rounded-xl shadow-lg shadow-purple-500"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(128, 0, 128, 0.8)" }}
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">My CodeChef Journey</h2>
          <p className="text-lg text-gray-300">
            Solving problems on CodeChef has helped me strengthen my problem-solving skills. 
            I enjoy tackling challenges that push my abilities and prepare me for technical interviews.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            I've completed hundreds of problems across a variety of topics. My goal is to keep improving 
            and stay consistent in learning and solving new problems daily.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Codechefpage;
