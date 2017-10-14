import { combineReducers } from 'redux';
import EquipeReducer from '../components/equipe/reducers/reducer_equipe';
import PlayerReducer from '../components/player/reducers/reducer_player';
import LoginReducer from '../components/login/redux/reducer_login';

import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    state: (state = {}) => state,
    equipesState: EquipeReducer,
    playersState: PlayerReducer,
    loginState: LoginReducer,
    form: formReducer
});

export default rootReducer;
