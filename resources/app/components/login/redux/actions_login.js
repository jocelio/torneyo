import { axiosInstance } from '../../../factories/axios-factory'
import { hashHistory } from 'react-router'
import moment from 'moment';
import _ from 'lodash'
import json from './../../../clients.json';

export const LOGIN = 'LOGIN';
export const WRITE_LOCAL_STORAGE = 'WRITE_LOCALS_STORAGE';
export const REDIRECT_IN = 'REDIRECT_IN';
export const KEEP_SESSION = 'KEEP_SESSION';

export function login(data){

    const url = '/oauth/token';

    const envKey = (process.env.NODE_ENV =="production")?"prod":"dev"

    const { client_id } = json[envKey];
    const { client_secret } = json[envKey];

    const formData = {client_secret,client_id,
        grant_type:'password',
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
    localStorage.setItem('time_login', moment().format('YYYY-MM-DD HH:mm:ss'));

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

    const dateTimeLogin = localStorage.getItem('time_login');

    const expiresInTime = localStorage.getItem('expires_in')

    if (_.isNil(dateTimeLogin) || _.isNil(expiresInTime)) return false;

    const timeLogin = moment(dateTimeLogin, 'YYYY-MM-DD HH:mm:ss');

    const tokenExpireDate = timeLogin.add(parseInt(expiresInTime),'ms');

    return (localStorage.getItem('access_token')) && tokenExpireDate.isBefore(moment());

}
