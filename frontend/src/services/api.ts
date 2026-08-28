import axios from 'axios';
import type { Project, Feedback, FeedbackResponse } from '../types';

// Жёстко прописываем URL продакшена
const API_BASE_URL = 'https://gusarov-dev.duckdns.org:8443/api';

console.log('🔧 API URL:', API_BASE_URL);

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getProjects = async (): Promise<Project[]> => {
    const response = await api.get<Project[]>('/projects/');
    return response.data;
};

export const sendFeedback = async (data: Feedback): Promise<FeedbackResponse> => {
    const response = await api.post<FeedbackResponse>('/feedback/', data);
    return response.data;
};
