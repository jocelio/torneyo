import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Inbox from './components/Inbox';
import Equipe from './containers/equipe/Equipe';
import EquipeNew from './containers/equipe/EquipeNew';
import EquipeUpdate from './containers/equipe/EquipeUpdate';
import EquipeSearch from './containers/equipe/EquipeSearch';

import Player from './containers/player/Player';
import PlayerNew from './containers/player/PlayerNew';
import PlayerUpdate from './containers/player/PlayerUpdate';
import PlayerSearch from './containers/player/PlayerSearch';


export default (
    <Route path="/" component={App} title="TorneyoApp">
        <Route path="/home" component={Home}/>
        <Route path="/inbox" component={Inbox}/>
        <Route path="/equipe" component={Equipe}>
            <IndexRoute component={EquipeSearch}/>
            <Route path="new" component={EquipeNew}/>
            <Route path="update/:id" component={EquipeUpdate}/>
        </Route>
        <Route path="/player" component={Player}>
            <IndexRoute component={PlayerSearch}/>
            <Route path="new" component={PlayerNew}/>
            <Route path="update/:id" component={PlayerUpdate}/>
        </Route>
    </Route>
);