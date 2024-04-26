import axios from 'axios';

const baseURL = 'http://localhost:7777/api';
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
const SignUp = (name, email, phone, address, password) => axiosInstance.post('/auth/register', { name, email, phone, address, password }); // Remove URI concatenation


export { axiosInstance, SignUp }
