/**
 * Created by jocelio on 26/07/17.
 */
import axios from 'axios';
import {API_URL} from '../config/config'

export function axiosInstance(){

    const token = localStorage.getItem('access_token');

    const instance = axios.create({
        baseURL: API_URL,
        timeout: 1000,
        headers: {'Authorization': `Bearer ${token}`}
    });

    return instance;
}