import axios from 'axios';
import {ROOT_URL} from '../../../../app/config'

export const LOGIN = 'LOGIN';
export const WRITE_LOCALSTORAGE = 'WRITE_LOCALSTORAGE';

export function login(data){

    const url = `${ROOT_URL}/oauth/token`;

    const formdata = {
        client_secret:'bEoyH3MtiBgpLRRgl08wHo2sKra6Me3RuR4IJya0',
        grant_type:'password',
        client_id:2,
        username:data.username ,
        password:data.password
    }

    const response = axios.post(url, formdata);

    return {
        type: LOGIN,
        payload: response
    };
}

export function storeAuthCredentials(credentials){

    localStorage.setItem('access_token',credentials.access_token);
    localStorage.setItem('expires_in',credentials.expires_in);

    return {
        type: WRITE_LOCALSTORAGE,
        payload: true
    };
}
