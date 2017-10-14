/**
 * Created by jocelio on 26/07/17.
 */
import axios from 'axios';
const {API_URL} = process.env;

export function axiosInstance(){

    console.log('API_URL',API_URL)

    const instance = axios.create({
        baseURL: API_URL,
        timeout: 1000,
    });

    const token = localStorage.getItem('access_token');

    instance.interceptors.request.use(function (config) {
        if(token){
            config.headers = { Authorization: `Bearer ${token}`};
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    return instance;
}