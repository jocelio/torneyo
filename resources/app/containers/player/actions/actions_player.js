
import { axiosInstance } from '../../../axiosFactory'
import {ROOT_URL} from '../../../config'

export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const FETCH_PLAYER  = 'FETCH_PLAYER';
export const CREATE_PLAYER = 'CREATE_PLAYER';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const SEARCH_PLAYERS = 'SEARCH_PLAYERS';
export const FILTER_PLAYERS = 'FILTER_PLAYERS';

export function fetchPlayers(){

    const url = '/player';

    const response = axiosInstance().get(url);
    return {
        type: FETCH_PLAYERS,
        payload: response
    };
}

export function filterPlayer(players, player){

    const {name, description} = player;

    if(!name && !description){
        return {type: FILTER_PLAYERS, payload: {filteredPlayer:players, holdPlayer:players}};
    }

    const filteredPlayer = players.filter((e) => {
        if(name)
            return (new RegExp(name.toUpperCase())).test(e.name.toUpperCase());
        if(description)
            return (new RegExp(description.toUpperCase())).test(e.description.toUpperCase());
    });

    return {
        type: FILTER_PLAYERS,
        payload: {filteredPlayer, holdPlayer:players}
    };
}

export function searchPlayer(player){
    const query = Object.keys(player).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(player[k])
    }).join('&')


    const url = `/player/search?${query}`;
    const response = axiosInstance().get(url);
    return {
        type: SEARCH_PLAYERS,
        payload: response
    };
}

export function fetchPlayer(id){
    const url = `/player/${id}`;
    const response = axiosInstance().get(url);
    return {
        type: FETCH_PLAYER,
        payload: response
    };
}

export function createPlayer(player){

    var fd = new FormData();

    fd.append('name', player.name);
    fd.append('surname', player.surname);
    fd.append('equipe_id', player.equipeId);
    fd.append('image', player.image, 'i.jpg');


    const url = `/player`;
    return {
        type: CREATE_PLAYER,
        payload: axiosInstance().post(url, fd, {headers: { 'content-type': 'multipart/form-data' }})
    };
}

export function deletePlayer(player){
    const url = `/player/${player.id}`;

    return {
        type: DELETE_PLAYER,
        payload: {id: player.id, response:axiosInstance().delete(url)}
    };
}

export function updatePlayer(player){
    const url = `/player/${player.id}`;
    return {
        type: UPDATE_PLAYER,
        payload: axiosInstance().put(url, player)
    };
}



