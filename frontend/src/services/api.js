import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getProjects = async () => {
    const response = await api.get('/projects/');
    return response.data;
};

export const sendFeedback = async (data) => {
    const response = await api.post('/feedback/', data);
    return response.data;
};
