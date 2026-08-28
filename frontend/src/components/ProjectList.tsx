import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import { staggerContainer, scaleIn, scrollReveal } from '../utils/animations';

const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const API_URL = 'https://gusarov-dev.duckdns.org:8443/api/projects/';
                console.log('🚀 Запрос к API:', API_URL);
                
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                const data = await response.json();
                console.log('✅ Получены проекты:', data);
                setProjects(data);
                setLoading(false);
            } catch (err) {
                console.error('❌ Ошибка загрузки:', err);
                setError('Ошибка загрузки проектов');
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    if (loading) {
        return <div className="text-center py-12 text-gray-500">Загрузка проектов...</div>;
    }

    if (error) {
        return <div className="text-center py-12 text-red-500">{error}</div>;
    }

    if (projects.length === 0) {
        return <div className="text-center py-12 text-gray-500">Нет проектов. Добавьте их через админку Django.</div>;
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scrollReveal}
        >
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {projects.map((project, index) => (
                    <motion.div 
                        key={project.id} 
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-100"
                        variants={scaleIn}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="mb-4">
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Стек технологий
                                </span>
                                <p className="text-sm text-gray-700 mt-1">
                                    {project.stack}
                                </p>
                            </div>
                            <div className="flex gap-3">
                                {project.github_url && (
                                    <motion.a 
                                        href={project.github_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-sm bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        GitHub
                                    </motion.a>
                                )}
                                {project.demo_url && (
                                    <motion.a 
                                        href={project.demo_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Демо
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default ProjectList;
