import axios from 'axios';
import {ROOT_URL} from '../../../config'

export const FETCH_EQUIPES = 'FETCH_EQUIPES';
export const CLEAR_EQUIPES = 'CLEAR_EQUIPES';
export const CREATE_EQUIPES = 'CREATE_EQUIPES';
export const DELETE_EQUIPES = 'DELETE_EQUIPES';


export function fetchEquipes(equipe){

    const url = `${ROOT_URL}/equipe`;

    return {
        type: FETCH_EQUIPES,
        payload: axios.get(url)
    };
}

export function createEquipe(equipe){
    const url = `${ROOT_URL}/equipe`;
    return {
        type: CREATE_EQUIPES,
        payload: axios.post(url, equipe)
    };
}

export function deleteEquipe(equipe){

    const url = `${ROOT_URL}/equipe/${equipe.id}`;

    return {
        type: DELETE_EQUIPES,
        payload: axios.delete(url)
    };
}

export function clearEquipe(){
    return {
        type: CLEAR_EQUIPES,
        payload: []
    };

}



