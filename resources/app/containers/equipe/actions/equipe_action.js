import axios from 'axios';
import {ROOT_URL} from '../../../config'

export const FETCH_EQUIPES = 'FETCH_EQUIPES';
export const FETCH_EQUIPE  = 'FETCH_EQUIPE';
export const CREATE_EQUIPE = 'CREATE_EQUIPE';
export const DELETE_EQUIPE = 'DELETE_EQUIPE';
export const UPDATE_EQUIPE = 'UPDATE_EQUIPE';


export function fetchEquipes(equipe){
    const url = `${ROOT_URL}/equipe`;
    const response = axios.get(url);
    return {
        type: FETCH_EQUIPES,
        payload: response
    };
}

export function fetchEquipe(id){
    const url = `${ROOT_URL}/equipe/${id}`;
    const response = axios.get(url);
    return {
        type: FETCH_EQUIPE,
        payload: response
    };
}

export function createEquipe(equipe){
    const url = `${ROOT_URL}/equipe`;
    return {
        type: CREATE_EQUIPE,
        payload: axios.post(url, equipe)
    };
}

export function deleteEquipe(equipe){
    const url = `${ROOT_URL}/equipe/${equipe.id}`;
    return {
        type: DELETE_EQUIPE,
        payload: axios.delete(url)
    };
}

export function updateEquipe(equipe){
    const url = `${ROOT_URL}/equipe/${equipe.id}`;
    return {
        type: UPDATE_EQUIPE,
        payload: axios.put(url, equipe)
    };
}



