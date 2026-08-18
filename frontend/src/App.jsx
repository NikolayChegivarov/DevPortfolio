import ProjectList from './components/ProjectList.jsx';

function App() {
    return (
        <div>
            <header style={{ textAlign: 'center', padding: '40px', borderBottom: '1px solid #ddd' }}>
                <h1>Портфолио разработчика</h1>
                <p>Django + React</p>
            </header>
            <main>
                <ProjectList />
            </main>
        </div>
    );
}

export default App;
