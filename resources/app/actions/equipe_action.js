import axios from 'axios';

const ROOT_URL = `http://localhost:8001`;

export const FETCH_EQUIPES = 'FETCH_EQUIPES';
export const CLEAR_EQUIPES = 'CLEAR_EQUIPES';

export function fetchEquipe(equipe){

    const url = `${ROOT_URL}/equipe`;

    return {
        type: FETCH_EQUIPES,
        payload: axios.get(url)
    };
}

export function createEquipe(equipe){
    
    const url = `${ROOT_URL}/equipe`;
    const request = axios.post(url, {'name':equipe.name,'description':equipe.description});

    return {
        type: FETCH_EQUIPES,
        payload: request
    };
}

export function deleteEquipe(equipe){

    const url = `${ROOT_URL}/equipe/${equipe.id}`;

    return {
        type: FETCH_EQUIPES,
        payload: axios.delete(url)
    };
}

export function clearEquipe(){
    return {
        type: CLEAR_EQUIPES,
        payload: []
    };

}



