/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-05-15T14:01:48+02:00
 * @Email:  me@andreeray.se
 * @Filename: index.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-06-01T13:18:25+02:00
 */

import React from 'react'
import firebase from 'app/firebase'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import Routing from 'routing'
import Login from 'login'
import Todo from 'todo'

var requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) replace('/')
    next()
}

var ifLoggedIn = (nextState, replace, next) => {
    if (firebase.auth().currentUser) replace('/// TODO: ')
    next()
}


export default (
    <Router history={hashHistory}>
        <Route path='/' component={Routing}>
            <IndexRoute component={Login}/>
            <Route path="/todo" onEnter={requireLogin} component={Todo}/>
        </Route>
    </Router>
)
