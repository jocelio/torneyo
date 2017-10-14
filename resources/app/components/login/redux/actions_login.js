import { axiosInstance } from '../../../factories/axios-factory'
import { hashHistory } from 'react-router'
import moment from 'moment'
import _ from 'lodash'

export const LOGIN = 'LOGIN';
export const WRITE_LOCAL_STORAGE = 'WRITE_LOCALS_STORAGE';
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

    hashHistory.push("/home")

    return {
        type: REDIRECT_IN,
        payload: null
    };

}

export const isLoggedIn = () => {

    // const timeLogin = moment().unix(parseInt(localStorage.getItem('time_login')));
    // console.log(timeLogin)
    // const expiresIn = moment().unix(parseInt(localStorage.getItem('expires_in')));
    //
    // const currentDate = moment();
    // const tokenExpireDate = timeLogin.add(expiresIn,'ms');
    //
    // return (localStorage.getItem('access_token')) && tokenExpireDate.isAfter(currentDate);

    return !_.isNil(localStorage.getItem('access_token'));
}

export function keepSession() {

    if(isLoggedIn())
         hashHistory.push("/login")

    return {
        type: KEEP_SESSION,
        payload: null
    };

}
