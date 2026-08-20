import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import ProjectList from './components/ProjectList';
import FeedbackForm from './components/FeedbackForm';

// Компонент для обработки якорей
const ScrollToHash = () => {
    const location = useLocation();

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

    return null;
};

function App() {
    return (
        <BrowserRouter>
            <ScrollToHash />
            <div className="min-h-screen bg-gray-50">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <div id="home">
                                    <Hero />
                                </div>
                                <TechStack />
                                <div className="max-w-6xl mx-auto px-4 py-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                                        Избранные проекты
                                    </h2>
                                    <ProjectList />
                                </div>
                                <div id="contact">
                                    <FeedbackForm />
                                </div>
                            </>
                        } />
                        <Route path="/projects" element={
                            <>
                                <div className="max-w-6xl mx-auto px-4 py-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                        Все проекты
                                    </h2>
                                    <ProjectList />
                                </div>
                                <div id="contact">
                                    <FeedbackForm />
                                </div>
                            </>
                        } />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;

