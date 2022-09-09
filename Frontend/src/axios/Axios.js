import axios from "axios";

const axios_instance = axios.create({
    baseURL: 'http://localhost:8080/api/comments',
    'Access-Control-Allow-Origin' : '*'
})

export default axios_instance;