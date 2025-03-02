import React from "react";
import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact, SiExpress, SiNodedotjs, 
  SiMongodb, SiPython, SiC, SiGit, SiGithub, 
  SiJest, SiGithubactions, SiJenkins, SiDocker 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-5xl" />, shadow: "shadow-orange-500" },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 text-5xl" />, shadow: "shadow-blue-500" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500 text-5xl" />, shadow: "shadow-cyan-500" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" />, shadow: "shadow-yellow-400" },
  { name: "ReactJS", icon: <SiReact className="text-blue-400 text-5xl" />, shadow: "shadow-blue-400" },
  { name: "ExpressJS", icon: <SiExpress className="text-gray-300 text-5xl" />, shadow: "shadow-gray-300" },
  { name: "NodeJS", icon: <SiNodedotjs className="text-green-500 text-5xl" />, shadow: "shadow-green-500" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-5xl" />, shadow: "shadow-green-400" },
  { name: "Java", icon: <FaJava className="text-red-600 text-5xl" />, shadow: "shadow-red-600" },
  { name: "Python", icon: <SiPython className="text-yellow-500 text-5xl" />, shadow: "shadow-yellow-500" },
  { name: "C", icon: <SiC className="text-blue-500 text-5xl" />, shadow: "shadow-blue-500" },
  { name: "VSCode", icon: <VscCode className="text-blue-400 text-5xl" />, shadow: "shadow-blue-400" },
  { name: "Git", icon: <SiGit className="text-red-500 text-5xl" />, shadow: "shadow-red-500" },
  { name: "GitHub", icon: <SiGithub className="text-white text-5xl" />, shadow: "shadow-gray-500" },
  { name: "Jest", icon: <SiJest className="text-red-400 text-5xl" />, shadow: "shadow-red-400" },
  { name: "GitHub Actions", icon: <SiGithubactions className="text-purple-500 text-5xl" />, shadow: "shadow-purple-500" },
  { name: "Jenkins", icon: <SiJenkins className="text-gray-400 text-5xl" />, shadow: "shadow-gray-400" },
  { name: "Docker", icon: <SiDocker className="text-blue-500 text-5xl" />, shadow: "shadow-blue-500" }
];

const Skillspage = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen  bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white px-6 md:px-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-wide"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        My Skills
      </motion.h1>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 w-full max-w-5xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className={`flex flex-col items-center bg-gray-800 p-8 rounded-xl transition-all transform shadow-lg ${skill.shadow}`}
            whileHover={{ scale: 1.2, boxShadow: "0px 20px 40px rgba(255, 255, 255, 0.3)" }}
          >
            {skill.icon}
            <motion.p 
              className="text-lg font-semibold mt-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skillspage;
