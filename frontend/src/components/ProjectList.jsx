import { useEffect, useState } from 'react';
import { getProjects } from '../services/api.js';

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                console.log('Загружаем проекты...');
                const data = await getProjects();
                console.log('Получены проекты:', data);
                setProjects(data);
                setLoading(false);
            } catch (err) {
                console.error('Ошибка:', err);
                setError('Ошибка загрузки проектов');
                setLoading(false);
            }
        };
        loadProjects();
    }, []);

    if (loading) return <div style={{ padding: '40px', textAlign: 'center' }}>Загрузка...</div>;
    if (error) return <div style={{ padding: '40px', textAlign: 'center', color: 'red' }}>{error}</div>;
    if (projects.length === 0) return <div style={{ padding: '40px', textAlign: 'center' }}>Нет проектов</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Мои проекты</h2>
            {projects.map(p => (
                <div key={p.id} style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '10px' }}>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <p><strong>Стек:</strong> {p.stack}</p>
                    {p.github_url && <a href={p.github_url}>GitHub</a>}
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
