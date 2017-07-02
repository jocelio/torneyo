import axios from 'axios';

const ROOT_URL = `http://localhost:8001`;

export const FETCH_EQUIPES = 'FETCH_EQUIPES';

export function fetchEquipe(equipe){

    const url = `${ROOT_URL}/equipe`;
    const request = axios.get(url);

    return {
        type: FETCH_EQUIPES,
        payload: request
    };
}
