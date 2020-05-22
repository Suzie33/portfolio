import axios from 'axios';

const baseUrl = "https://webdev-api.loftschool.com/";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMxNSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTAxNDA1MDMsImV4cCI6MTU5MDE1ODUwMywibmJmIjoxNTkwMTQwNTAzLCJqdGkiOiJiN2tMYjJDSlZFZzVyNUh2In0.hnNig592bOxlZgYs2QmJmvBI6nSwD2cYgYpXeyXQSHQ";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

export { baseUrl, token, axios }