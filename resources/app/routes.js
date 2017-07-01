import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/App';
import Home from './components/Home';
import Inbox from './components/Inbox';



export default (
    <Route path="/" component={App} title="TorneyoApp">
        <Route path="/home" component={Home}/>
        <Route path="/inbox" component={Inbox}/>
    </Route>
);