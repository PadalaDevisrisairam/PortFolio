import React from "react";
import { motion } from "framer-motion";

function Githubpage() {
    // Animation variants for the container and child elements
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Delay between child animations
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 }, // Start below and invisible
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Move to position
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Animated Heading */}
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-10 text-blue-600 shadow-lg"
                variants={itemVariants}
            >
                Github Contributions
            </motion.h1>

            {/* Animated Image Container */}
            <motion.div
                className="w-full max-w-6xl p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-xl transition-all duration-6000"
                variants={itemVariants}
            >
                <a
                    href="https://github.com/PadalaDevisrisairam"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.img
                        src="github.png"
                        alt="Github Contributions Heatmap"
                        className="w-full rounded-lg border-4 shadow-lg transition-transform duration-1000 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-600"
                        whileHover={{ scale: 1.1 }} // Slight hover effect
                    />
                </a>
            </motion.div>

            {/* Animated Paragraph */}
            <motion.p
                className="text-2xl text-gray-300 text-center mt-6 max-w-4xl"
                variants={itemVariants}
            >
                My GitHub contributions reflect my consistent commitment to open-source development and personal projects. 
                Explore my repositories to learn more about the projects I've worked on and the skills I bring to the table.
            </motion.p>
        </motion.div>
    );
}

export default Githubpage;