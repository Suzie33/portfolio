import axios from 'axios';

const baseUrl = "https://webdev-api.loftschool.com/";
const token = localStorage.getItem('token') || "";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

export { baseUrl, token, axios }