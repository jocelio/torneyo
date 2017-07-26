/**
 * Created by jocelio on 26/07/17.
 */
import axios from 'axios';
import {ROOT_URL} from './config'

export function axiosInstance(){

    const token = localStorage.getItem('access_token');

    var instance = axios.create({
        baseURL: ROOT_URL,
        timeout: 1000,
        headers: {'Authorization': `Bearer ${token}`}
    });

    return instance;
}