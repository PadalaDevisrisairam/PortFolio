import React from "react";
import { FaLaptopCode, FaCloud, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.5 }, // Delay each section by 0.5s
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
        opacity: 1, 
        scale: 1, 
        transition: { duration: 0.5 } 
    },
    floating: {
        y: [0, -10, 0], // Floating effect
        transition: {
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
        }
    }
};

function ExperiencePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white px-6 py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-300">Experience</h1>

            <motion.div 
                className="space-y-8 w-full max-w-4xl"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* Section 1 - Full Stack Developer */}
                <motion.div 
                    variants={itemVariants} 
                    initial="hidden"
                    animate="show"
                    whileHover={{
                        scale: 1.1, 
                        boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.5)"
                    }}
                    className="flex items-center space-x-6 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
                >
                    <FaLaptopCode className="text-yellow-300 text-4xl" />    
                    <div>
                        <h2 className="text-2xl font-semibold">Full Stack Developer Intern</h2>
                        <p className="text-lg text-gray-200">Zidio Development | May 2024 - Aug 2024</p>
                        <p className="text-gray-300">Developed a web application using MERN stack. Implemented key features that improved user engagement.</p>
                    </div>
                </motion.div>

                {/* Section 2 - Cloud Computing */}
                <motion.div 
                    variants={itemVariants} 
                    initial="hidden"
                    animate="show"
                    whileHover={{
                        scale: 1.1, 
                        boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.5)"
                    }}
                    className="flex items-center space-x-6 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
                >
                    <FaCloud className="text-yellow-300 text-4xl" />
                    <div>
                        <h2 className="text-2xl font-semibold">Cloud Computing Intern</h2>
                        <p className="text-lg text-gray-200">Juniper Networks | Apr 2024 - June 2024</p>
                    </div>
                </motion.div>

                {/* Section 3 - Cyber Security */}
                <motion.div 
                    variants={itemVariants} 
                    initial="hidden"
                    animate="show"
                    whileHover={{
                        scale: 1.1, 
                        boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.5)"
                    }}
                    className="flex items-center space-x-6 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
                >
                    <FaShieldAlt className="text-yellow-300 text-4xl" />
                    <div>
                        <h2 className="text-2xl font-semibold">Cyber Security Intern</h2>
                        <p className="text-lg text-gray-200">Palo Alto Networks | Jan 2024 - March 2024</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default ExperiencePage;
