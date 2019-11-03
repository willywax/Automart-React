import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1';

export function loginUser(userData) {
    return createPost('/auth/signin', userData);
}

export function registerUser(userData) {
    return createPost('/auth/signup', userData);
}


function createPost(endPoint, data) {
    return axios.post(`${BASE_URL}${endPoint}`, data);
}