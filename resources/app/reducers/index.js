import { combineReducers } from 'redux';
import FetchEquipeReducer from '../containers/equipe/reducers/reducer_equipe';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    state: (state = {}) => state,
    equipesState: FetchEquipeReducer,
    form: formReducer
});

export default rootReducer;
