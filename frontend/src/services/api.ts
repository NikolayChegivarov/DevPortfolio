import axios from 'axios';
// Убираем импорт Feedback и FeedbackResponse, пока они не нужны
import { Project } from '../types';

// Базовый URL для API (Django)
const API_BASE_URL = 'http://localhost:8000/api';

// Создаем экземпляр axios с настройками
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Получить список проектов
export const getProjects = async (): Promise<Project[]> => {
    const response = await api.get<Project[]>('/projects/');
    return response.data;
};

// Отправить сообщение (пока просто заглушка, вернем позже)
export const sendFeedback = async (data: any): Promise<any> => {
    const response = await api.post('/feedback/', data);
    return response.data;
};
