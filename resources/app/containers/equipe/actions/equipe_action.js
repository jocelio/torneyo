import axios from 'axios';
import {ROOT_URL} from '../../../config'

export const FETCH_EQUIPES = 'FETCH_EQUIPES';
export const FETCH_EQUIPE  = 'FETCH_EQUIPE';
export const CREATE_EQUIPE = 'CREATE_EQUIPE';
export const DELETE_EQUIPE = 'DELETE_EQUIPE';
export const UPDATE_EQUIPE = 'UPDATE_EQUIPE';
export const SEARCH_EQUIPES = 'SEARCH_EQUIPES';
export const FILTER_EQUIPES = 'FILTER_EQUIPES';



export function fetchEquipes(equipe){
    const url = `${ROOT_URL}/equipe`;
    const response = axios.get(url);
    return {
        type: FETCH_EQUIPES,
        payload: response
    };
}

export function filterEquipes(equipes, equipe){

    const {name, description} = equipe;

    if(!name && !description){
        return {type: FILTER_EQUIPES, payload: {filteredEquipes:equipes, holdEquipes:equipes}};
    }

    const filteredEquipes = equipes.filter((e) => {
        if(name)
            return (new RegExp(name.toUpperCase())).test(e.name.toUpperCase());
        if(description)
            return (new RegExp(description.toUpperCase())).test(e.description.toUpperCase());
    });

    return {
        type: FILTER_EQUIPES,
        payload: {filteredEquipes, holdEquipes:equipes}
    };
}

export function searchEquipes(equipe){
    const query = Object.keys(equipe).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(equipe[k])
    }).join('&')


    const url = `${ROOT_URL}/equipe/search?${query}`;
    const response = axios.get(url);
    return {
        type: SEARCH_EQUIPES,
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

    var fd = new FormData();

    fd.append('name', equipe.name);
    fd.append('description', equipe.description);
    fd.append('image', equipe.image, 'i.jpg');


    const url = `${ROOT_URL}/equipe`;
    return {
        type: CREATE_EQUIPE,
        payload: axios.post(url, fd, {headers: { 'content-type': 'multipart/form-data' }})
    };
}

export function deleteEquipe(equipe){
    const url = `${ROOT_URL}/equipe/${equipe.id}`;

    return {
        type: DELETE_EQUIPE,
        payload: {id: equipe.id, response:axios.delete(url)}
    };
}

export function updateEquipe(equipe){
    const url = `${ROOT_URL}/equipe/${equipe.id}`;
    return {
        type: UPDATE_EQUIPE,
        payload: axios.put(url, equipe)
    };
}



