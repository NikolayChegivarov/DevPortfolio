import ProjectList from './components/ProjectList';
import FeedbackForm from './components/FeedbackForm';

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Портфолио разработчика
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Django + React + TypeScript + Tailwind
                    </p>
                </div>
            </header>
            <main>
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <ProjectList />
                </div>
                <FeedbackForm />
            </main>
        </div>
    );
}

export default App;
