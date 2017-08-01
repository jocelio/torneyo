import { combineReducers } from 'redux';
import EquipeReducer from '../containers/equipe/reducers/reducer_equipe';
import PlayerReducer from '../containers/player/reducers/reducer_player';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    state: (state = {}) => state,
    equipesState: EquipeReducer,
    playersState: PlayerReducer,
    form: formReducer
});

export default rootReducer;
