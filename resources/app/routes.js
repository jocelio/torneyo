import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Inbox from './components/Inbox';
import Equipe from './containers/equipe/Equipe';
import EquipeNew from './containers/equipe/EquipeNew';
import EquipeUpdate from './containers/equipe/EquipeUpdate';
import EquipeSearch from './containers/equipe/EquipeSearch';


export default (
    <Route path="/" component={App} title="TorneyoApp">
        <Route path="/home" component={Home}/>
        <Route path="/inbox" component={Inbox}/>
        <Route path="/equipe" component={Equipe}>
            <IndexRoute component={EquipeSearch}/>
            <Route path="new" component={EquipeNew}/>
            <Route path="update/:id" component={EquipeUpdate}/>
        </Route>
        <Route path="/player" component={Equipe}>
            <IndexRoute component={EquipeSearch}/>
            <Route path="new" component={EquipeNew}/>
            <Route path="update/:id" component={EquipeUpdate}/>
        </Route>
    </Route>
);