import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { getProjects } from '../services/api';

const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
                setLoading(false);
            } catch (err) {
                setError('Ошибка загрузки проектов');
                setLoading(false);
                console.error(err);
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
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Мои проекты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div 
                        key={project.id} 
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-100"
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
                                    <a 
                                        href={project.github_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-sm bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md transition-colors"
                                    >
                                        GitHub
                                    </a>
                                )}
                                {project.demo_url && (
                                    <a 
                                        href={project.demo_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                                    >
                                        Демо
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
