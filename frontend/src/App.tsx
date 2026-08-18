import React from 'react';
import ProjectList from './components/ProjectList';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Портфолио разработчика</h1>
                <p>Django + React + TypeScript</p>
            </header>
            <main>
                <ProjectList />
            </main>
        </div>
    );
}

export default App;

