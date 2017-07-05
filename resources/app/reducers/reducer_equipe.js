import { FETCH_EQUIPES, CLEAR_EQUIPES } from '../actions/equipe_action'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_EQUIPES:
            if(action.payload.data)
                return [ action.payload.data ]
            return [];
        break;
        case CLEAR_EQUIPES:
            return []
        break;
        default:
            return []
    }
};