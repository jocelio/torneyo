import { FETCH_EQUIPES, FETCH_EQUIPE, SEARCH_EQUIPES, CREATE_EQUIPE, DELETE_EQUIPE, FILTER_EQUIPES } from '../actions/equipe_action'


export default (state = [], action) => {

    switch (action.type) {
        case FETCH_EQUIPES:
            return {all:action.payload.data}
        case FETCH_EQUIPE:
            return {equipe:action.payload.data}
        case CREATE_EQUIPE:
            return action.payload
        case DELETE_EQUIPE:
            return {all: state.all.filter(function(i) {
                return i.id != action.payload.id
            })};
        case SEARCH_EQUIPES:
            return {all:action.payload.data}
        case FILTER_EQUIPES:
            return {all:action.payload.filteredEquipes, holdEquipes:action.payload.holdEquipes}
        default:
            return state;
    }

};