import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../hooks/useNavigation';
import { fadeInUp, scaleIn } from '../utils/animations';

const Hero: React.FC = () => {
    const { goToProjects, goToContact } = useNavigation();

    return (
        <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="max-w-3xl">
                    <motion.h1 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        Николай Гусаров
                        <motion.span 
                            className="block text-blue-600 mt-2"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.2 }}
                        >
                            Full-stack разработчик
                        </motion.span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3 }}
                    >
                        Создаю высоконагруженные веб-сервисы, CRM/ERP системы, 
                        дашборды и API под ключ. <br />
                        <span className="font-medium text-gray-700">Быстро, надежно, на совесть.</span>
                    </motion.p>

                    <motion.div 
                        className="flex flex-wrap gap-4"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                    >
                        <motion.button
                            onClick={goToProjects}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors shadow-lg hover:shadow-xl cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Посмотреть проекты
                        </motion.button>
                        <motion.button
                            onClick={goToContact}
                            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg font-medium transition-colors cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Обсудить проект
                        </motion.button>
                    </motion.div>

                    <motion.div 
                        className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-500"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.5 }}
                    >
                        <motion.span 
                            className="flex items-center gap-2"
                            variants={scaleIn}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.6 }}
                        >
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Более 5 лет опыта
                        </motion.span>
                        <motion.span 
                            className="flex items-center gap-2"
                            variants={scaleIn}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.7 }}
                        >
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            10+ успешных проектов
                        </motion.span>
                        <motion.span 
                            className="flex items-center gap-2"
                            variants={scaleIn}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.8 }}
                        >
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Full-stack разработка
                        </motion.span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
