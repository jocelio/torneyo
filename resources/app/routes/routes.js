import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../containers/App';
import Home from '../containers/Home';
import Inbox from '../containers/Inbox';
import Equipe from '../components/equipe/Equipe';
import EquipeNew from '../components/equipe/EquipeNew';
import EquipeUpdate from '../components/equipe/EquipeUpdate';
import EquipeSearch from '../components/equipe/EquipeSearch';

import Player from '../components/player/Player';
import PlayerNew from '../components/player/PlayerNew';
import PlayerUpdate from '../components/player/PlayerUpdate';
import PlayerSearch from '../components/player/PlayerSearch';


export default
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
