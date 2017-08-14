import { axiosInstance } from '../../../../app/axiosFactory'

export const LOGIN = 'LOGIN';
export const WRITE_LOCAL_STORAGE = 'WRITE_LOCALS_TORAGE';
export const REDIRECT_IN = 'REDIRECT_IN';
export const KEEP_SESSION = 'KEEP_SESSION';

export function login(data){

    const url = '/oauth/token';

    const formData = {
        client_secret:'bEoyH3MtiBgpLRRgl08wHo2sKra6Me3RuR4IJya0',
        grant_type:'password',
        client_id:2,
        username: data.username,
        password: data.password
    }

    const response = axiosInstance().post(url, formData);

    return {
        type: LOGIN,
        payload: response
    };

}

export function storeAuthCredentials(credentials){

    localStorage.setItem('access_token', credentials.access_token);
    localStorage.setItem('expires_in', credentials.expires_in);
    localStorage.setItem('time_login', new Date().getTime());

    return {
        type: WRITE_LOCAL_STORAGE,
        payload: true
    };
}

export function redirectIn() {

    window.location.href="/#/"

    return {
        type: REDIRECT_IN,
        payload: null
    };

}

export function keepSession() {

    const timeLogin = parseInt(localStorage.getItem('time_login'));
    const expiresIn = parseInt(localStorage.getItem('expires_in'));

    const currentDate = new Date();
    const tokenExpireDate = new Date(timeLogin + expiresIn);
    console.log(timeLogin);
    console.log(expiresIn);
    console.log(timeLogin + expiresIn);

    const isAuthenticated = tokenExpireDate > currentDate ? true : false;

    if(!localStorage.getItem('access_token') || !isAuthenticated)
        window.location.href="/login";

    return {
        type: KEEP_SESSION,
        payload: null
    };

}