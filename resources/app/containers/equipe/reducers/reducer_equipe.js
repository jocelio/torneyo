import { LOAD, FETCH_EQUIPES, FETCH_EQUIPE, CLEAR_EQUIPES, CREATE_EQUIPE, DELETE_EQUIPE } from '../actions/equipe_action'

const INITIAL_STATE = [];

export default (state = [], action) => {

    switch (action.type) {
        case FETCH_EQUIPES:
            return {all:action.payload.data}
        case FETCH_EQUIPE:
            return {equipe:action.payload.data}
        case CLEAR_EQUIPES:
            return INITIAL_STATE
        case CREATE_EQUIPE:
            return action.payload
        case DELETE_EQUIPE:
            return action.payload.data
            break;
        default:
            return INITIAL_STATE;
    }

};