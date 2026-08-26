import axios from 'axios';
import type { Project, Feedback, FeedbackResponse } from '../types';

const API_BASE_URL = 'http://localhost:8000/api';

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
