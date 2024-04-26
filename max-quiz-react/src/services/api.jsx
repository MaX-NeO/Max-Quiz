import axios from 'axios';

const baseURL = 'http://localhost:7777/api';
const axiosInstance = axios.create({
    baseURL,
});


const SignUp = (name, email, phone, address, password) => axiosInstance.post('/auth/register', { name, email, phone, address, password }); // Remove URI concatenation


export { axiosInstance, SignUp }
