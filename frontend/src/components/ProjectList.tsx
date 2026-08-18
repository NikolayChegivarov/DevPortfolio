import React, { useEffect, useState } from 'react';
import { Project } from '../types'; // Убираем Feedback, он пока не нужен
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
        return <div className="loading">Загрузка проектов...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (projects.length === 0) {
        return <div className="no-projects">Нет проектов. Добавьте их через админку Django.</div>;
    }

    return (
        <section className="projects-section">
            <h2>Мои проекты</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        {project.image_url && (
                            <img 
                                src={project.image_url} 
                                alt={project.title}
                                className="project-image"
                            />
                        )}
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-stack">
                            <strong>Стек:</strong> {project.stack}
                        </div>
                        <div className="project-links">
                            {project.github_url && (
                                <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            )}
                            {project.demo_url && (
                                <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                                    Демо
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectList;
