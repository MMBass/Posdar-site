import axios from "axios";

export const posdarUrlInstance = axios.create({
    baseURL: 'https://posdar.herokuapp.com',
    // baseURL: 'http://localhost:5000',
    headers: {'X-Custom-Header': 'foobar'}
});