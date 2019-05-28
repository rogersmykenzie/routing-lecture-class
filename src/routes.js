import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import Profile from './components/Profile'
import Settings from './components/Settings';
import NotFound from './components/NotFound'
import User from './components/User';

export default (
    <Switch>
        <Route path='/profile/settings' component={Settings} />
        <Route path='/profile' component={Profile} /> 
        <Route path='/onion/:id' component={User} />
        <Route path='/render' render={() => <h1>Render</h1>} />
        <Route exact path='/' component={Home}/>
        <Route component={NotFound} />
    </Switch> 
)