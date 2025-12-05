import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/';

const api = axios.create({
    // Using localhost whilst in DEV
    // Will change to process.env.VITE_API_URL for production
    baseURL: API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export const getProjects = () => {
    return api.get('projects/')
    .then(response => response.data)
    .catch(error => {
        console.error("Error fetching projects:", error);
        throw error;
    });
};

export const sendContactMessage = (messageData) => {
    return api.post('contact/', messageData)
    .then(response => response.data)
    .catch(error => {
        console.error("Error sending message:", error);
        throw error;
    });
};

export default api;
