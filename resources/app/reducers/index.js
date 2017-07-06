import { combineReducers } from 'redux';
import FetchEquipeReducer from '../containers/equipe/reducers/reducer_equipe';
import {reducers as FormReducers} from 'redux-form';

const rootReducer = combineReducers({
    state: (state = {}) => state,
    equipesState: FetchEquipeReducer,
    form: FormReducers
});

export default rootReducer;
