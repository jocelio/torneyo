/**
 * Created by jocelio on 26/07/17.
 */
import axios from 'axios';
const {API_URL} = process.env;

export function axiosInstance(){

    const token = localStorage.getItem('access_token');
    console.log(API_URL)
    const instance = axios.create({
        baseURL: API_URL,
        timeout: 1000,
        headers: {'Authorization': `Bearer ${token}`}
    });

    return instance;
}