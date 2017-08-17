import { LOGIN } from '../actions/actions_login'


export default (state = [], action) => {

    switch (action.type) {
        case LOGIN:
            return action.payload.data

    }

};