import { FETCH_EQUIPES } from '../actions/index'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_EQUIPES:
            return [ action.payload.data, ...state ];
        default:
            return state
    }
};