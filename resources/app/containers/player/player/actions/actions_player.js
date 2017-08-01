
import { axiosInstance } from '../../../axiosFactory'
import {ROOT_URL} from '../../../config'

export const FETCH_EQUIPES = 'FETCH_EQUIPES';
export const FETCH_EQUIPE  = 'FETCH_EQUIPE';
export const CREATE_EQUIPE = 'CREATE_EQUIPE';
export const DELETE_EQUIPE = 'DELETE_EQUIPE';
export const UPDATE_EQUIPE = 'UPDATE_EQUIPE';
export const SEARCH_EQUIPES = 'SEARCH_EQUIPES';
export const FILTER_EQUIPES = 'FILTER_EQUIPES';


export function fetchPlayer(equipe){

    const url = '/player';

    const response = axiosInstance().get(url);
    return {
        type: FETCH_EQUIPES,
        payload: response
    };
}

export function filterPlayer(equipes, equipe){

    const {name, description} = equipe;

    if(!name && !description){
        return {type: FILTER_EQUIPES, payload: {filteredPlayer:equipes, holdPlayer:equipes}};
    }

    const filteredPlayer = equipes.filter((e) => {
        if(name)
            return (new RegExp(name.toUpperCase())).test(e.name.toUpperCase());
        if(description)
            return (new RegExp(description.toUpperCase())).test(e.description.toUpperCase());
    });

    return {
        type: FILTER_EQUIPES,
        payload: {filteredPlayer, holdPlayer:equipes}
    };
}

export function searchPlayer(player){
    const query = Object.keys(player).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(player[k])
    }).join('&')


    const url = `/player/search?${query}`;
    const response = axiosInstance().get(url);
    return {
        type: SEARCH_EQUIPES,
        payload: response
    };
}

export function fetchPlayer(id){
    const url = `/player/${id}`;
    const response = axiosInstance().get(url);
    return {
        type: FETCH_EQUIPE,
        payload: response
    };
}

export function createPlayer(equipe){

    var fd = new FormData();

    fd.append('name', equipe.name);
    fd.append('description', equipe.description);
    fd.append('image', equipe.image, 'i.jpg');


    const url = `/player`;
    return {
        type: CREATE_EQUIPE,
        payload: axiosInstance().post(url, fd, {headers: { 'content-type': 'multipart/form-data' }})
    };
}

export function deletePlayer(equipe){
    const url = `/player/${equipe.id}`;

    return {
        type: DELETE_EQUIPE,
        payload: {id: equipe.id, response:axiosInstance().delete(url)}
    };
}

export function updateEquipe(equipe){
    const url = `/equipe/${equipe.id}`;
    return {
        type: UPDATE_EQUIPE,
        payload: axiosInstance().put(url, equipe)
    };
}



