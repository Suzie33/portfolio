import axios from 'axios';

const baseUrl = "https://webdev-api.loftschool.com/";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMxNSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTAwNzQxMDIsImV4cCI6MTU5MDA5MjEwMiwibmJmIjoxNTkwMDc0MTAyLCJqdGkiOiJUdHZMTnREcjdneXN0anpXIn0.8liHxi_ZqPexuEppm7WTi7tL8f_TM8GWwd3MsSoeAoQ";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

export { baseUrl, token, axios }