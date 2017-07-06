import { FETCH_EQUIPES, CLEAR_EQUIPES, CREATE_EQUIPES, DELETE_EQUIPES } from '../actions/equipe_action'

const INITIAL_STATE = [];

export default (state = [], action) => {

    switch (action.type) {
        case FETCH_EQUIPES:
            if(action.payload.data)
                return [ action.payload.data ]
            return INITIAL_STATE;
        break;
        case CLEAR_EQUIPES:
            return INITIAL_STATE;
        break;
        case CREATE_EQUIPES:
            return INITIAL_STATE;
            break;
        case DELETE_EQUIPES:
            return INITIAL_STATE;
            break;
        default:
            return INITIAL_STATE;
    }

};