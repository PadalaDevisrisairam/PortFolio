import React from "react";
import { motion } from "framer-motion";

const Projectspage = () => {
    const projectVariants = {
        hidden: (direction) => ({
            opacity: 0,
            scale: 0.8,
            x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
            y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
        }),
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
        },
    };

    const techColors = {
        REACT: "bg-blue-500",
        TAILWIND: "bg-blue-400",
        NODE: "bg-green-500",
        EXPRESS: "bg-gray-500",
        MONGODB: "bg-green-700",
        HTML: "bg-red-500",
        CSS: "bg-blue-800",
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen  bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white px-6 py-12">
            <motion.h1 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-bold mb-12 text-yellow-300"
            >
                Projects
            </motion.h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {[{
                    title: "Personal Portfolio",
                    description: "Developed a personal portfolio web application.",
                    img: "portfolio.png",
                    link: "https://67c1e5c187d4043917396289--adorable-strudel-e735bc.netlify.app/",
                    tech: ["REACT", "TAILWIND", "JAVASCRIPT"],
                    direction: "left"
                }, {
                    title: "Recreated YouTube App",
                    description: "It's a frontend YouTube recreated responsive design.",
                    img: "youtube.png",
                    link: "https://padaladevisrisairam.github.io/youtubeclone/",
                    tech: ["HTML", "CSS"],
                    direction: "top"
                }, {
                    title: "Resume Builder",
                    description: "Designed a resume builder during Zidio internship.",
                    img: "resumebuilder.png",
                    link: "https://67c25a6a2535c4bb62b2de2a--dreamy-melomakarona-d7b7de.netlify.app/",
                    tech: ["REACT", "NODE", "EXPRESS", "MONGODB"],
                    direction: "right"
                }].map((project, index) => (
                    <motion.div 
                        key={index}
                        custom={project.direction}
                        initial="hidden"
                        animate="visible"
                        variants={projectVariants}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-white"
                    >
                        <div className="relative w-full h-48">
                            <motion.img 
                                src={project.img} 
                                alt={project.title} 
                                className="w-full h-48 object-cover rounded-lg shadow-lg" 
                                whileHover={{ scale: 1.05 }}
                            />
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
                                Click Here
                            </a>
                        </div>
                        <div className="flex flex-col items-center mt-4">
                            <h2 className="text-2xl font-semibold">{project.title}</h2>
                            <p className="text-gray-300 text-center">{project.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className={`px-4 py-2 rounded-full ${techColors[tech] || "bg-gray-400"}`}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projectspage;
