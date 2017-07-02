import { combineReducers } from 'redux';
import FetchEquipeReducer from './reducer_equipe';

const rootReducer = combineReducers({
    state: (state = {}) => state,
    equipe: FetchEquipeReducer
});

export default rootReducer;
