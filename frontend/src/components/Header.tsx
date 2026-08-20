import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();
    
    const isActive = (path: string) => {
        return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
    };

    // Функция для плавного скролла к форме
    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                        DevPortfolio
                    </Link>
                    
                    <nav className="flex items-center gap-6">
                        <Link 
                            to="/projects" 
                            className={`${isActive('/projects')} transition-colors font-medium`}
                        >
                            Проекты
                        </Link>
                        <a 
                            href="#contact" 
                            onClick={scrollToContact}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                        >
                            Связаться
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
