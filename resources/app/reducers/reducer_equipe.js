import { FETCH_EQUIPES, CLEAR_EQUIPES } from '../actions/equipe_action'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_EQUIPES:
            return [ action.payload.data, ...state ];
        case CLEAR_EQUIPES:
            return [];
        default:
            return state
    }
};