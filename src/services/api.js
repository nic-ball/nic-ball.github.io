import axios from 'axios';

const api = axios.create({
    // Using localhost whilst in DEV
    // Will change to process.env.VITE_API_URL for production
    baseURL: 'http://127.0.0.1:8000/api/',
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

export default api;
