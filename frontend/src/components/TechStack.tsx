import React from 'react';

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
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <h3 className="text-2xl font-semibold text-gray-800 text-center mb-2">
                    Технологический стек
                </h3>
                <p className="text-gray-500 text-center mb-10">
                    Инструменты, с которыми я работаю ежедневно
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className={`${tech.color} px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow`}
                        >
                            <span className="text-xl">{tech.icon}</span>
                            {tech.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
