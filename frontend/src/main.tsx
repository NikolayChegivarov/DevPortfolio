import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// ПРОВЕРКА: явно импортируем API, чтобы Vite не выкинул его
import './services/api';

console.log('🚀 main.tsx загружен!');

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
