/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-05-15T14:01:48+02:00
 * @Email:  me@andreeray.se
 * @Filename: index.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-10-07T13:29:14+02:00
 */

import React from 'react'
import firebase from 'app/firebase'
import {Route, Router, IndexRoute, browserHistory} from 'react-router'

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
    <Router history={browserHistory}>
        <Route path='/' component={Routing}>
            <IndexRoute component={Login}/>
            <Route path="/todo" onEnter={requireLogin} component={Todo}/>
        </Route>
    </Router>
)
