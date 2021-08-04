import axios from "axios";

export const localhostInstance = axios.create({
    baseURL: 'https://posdar.herokuapp.com',
    headers: {'X-Custom-Header': 'foobar'}
});