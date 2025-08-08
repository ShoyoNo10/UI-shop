import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URI || 'http://localhost:5000/',
});

export default API;