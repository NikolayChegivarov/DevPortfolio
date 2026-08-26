import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, scaleIn, scrollReveal } from '../utils/animations';

const TechStack: React.FC = () => {
    const technologies = [
        { name: 'Python', icon: '🐍', color: 'bg-blue-50 text-blue-700' },
        { name: 'Django', icon: '🎯', color: 'bg-green-50 text-green-700' },
        { name: 'DRF', icon: '📡', color: 'bg-purple-50 text-purple-700' },
        { name: 'PostgreSQL', icon: '🐘', color: 'bg-indigo-50 text-indigo-700' },
        { name: 'Docker', icon: '🐳', color: 'bg-sky-50 text-sky-700' },
        { name: 'TypeScript', icon: '📘', color: 'bg-blue-50 text-blue-700' },
        { name: 'React', icon: '⚛️', color: 'bg-cyan-50 text-cyan-700' },
        { name: 'Tailwind', icon: '🎨', color: 'bg-teal-50 text-teal-700' },
    ];

    return (
        <motion.section 
            className="py-16 bg-white border-t border-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scrollReveal}
        >
            <div className="max-w-6xl mx-auto px-4">
                <motion.h3 
                    className="text-2xl font-semibold text-gray-800 text-center mb-2"
                    variants={scrollReveal}
                >
                    Технологический стек
                </motion.h3>
                <motion.p 
                    className="text-gray-500 text-center mb-10"
                    variants={scrollReveal}
                >
                    Инструменты, с которыми я работаю ежедневно
                </motion.p>
                
                <motion.div 
                    className="flex flex-wrap justify-center gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {technologies.map((tech) => (
                        <motion.div
                            key={tech.name}
                            className={`${tech.color} px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow`}
                            variants={scaleIn}
                            whileHover={{ scale: 1.1, y: -2 }}
                        >
                            <span className="text-xl">{tech.icon}</span>
                            {tech.name}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default TechStack;
