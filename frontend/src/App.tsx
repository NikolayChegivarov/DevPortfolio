import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import ProjectList from './components/ProjectList';
import FeedbackForm from './components/FeedbackForm';

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-50">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Hero />
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
