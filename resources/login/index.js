import React from 'react';
import ReactDOM from 'react-dom';
import FormLogin from './containers/login/LoginForm';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../app/reducers/index';
import {Router, hashHistory} from 'react-router';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <FormLogin/>
    </Provider>,
    document.getElementById('login')
);

