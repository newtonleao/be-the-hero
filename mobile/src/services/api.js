import axios from 'axios';

const api = axios.create({
    baseURL: 'Http://192.168.0.85:3333'
});

export default api;