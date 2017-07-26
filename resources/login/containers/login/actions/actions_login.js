import axios from 'axios';
import {ROOT_URL} from '../../../../app/config'

export const LOGIN = 'LOGIN';




export function login(equipe){
    const url = `${ROOT_URL}/oauth/token`;
    const response = axios.get(url);
    return {
        type: LOGIN,
        payload: response
    };
}
