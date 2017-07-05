import { combineReducers } from 'redux';
import FetchEquipeReducer from './reducer_equipe';

const rootReducer = combineReducers({
    state: (state = {}) => state,
    equipesState: FetchEquipeReducer
});

export default rootReducer;
