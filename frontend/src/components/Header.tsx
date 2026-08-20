import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigation } from '../hooks/useNavigation';

const Header: React.FC = () => {
    const location = useLocation();
    const { goToContact, goToProjects, goToHome } = useNavigation();
    
    const isActive = (path: string) => {
        return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
    };

    // Обработка якоря #contact при загрузке страницы
    useEffect(() => {
        if (location.hash === '#contact') {
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    }, [location]);

    return (
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <button 
                        onClick={goToHome}
                        className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                        DevPortfolio
                    </button>
                    
                    <nav className="flex items-center gap-6">
                        <button 
                            onClick={goToProjects}
                            className={`${isActive('/projects')} transition-colors font-medium cursor-pointer`}
                        >
                            Проекты
                        </button>
                        <button 
                            onClick={goToContact}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors cursor-pointer"
                        >
                            Связаться
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;

