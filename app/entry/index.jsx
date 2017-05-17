/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-02-28T00:22:35+01:00
* @Email:  me@andreeray.se
* @Filename: entry.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-05-15T14:31:31+02:00
*/

import React, {component} from 'react'
import ReactDOM from 'react-dom'
var {Provider} = require('react-redux')
var {Router, Route, IndexRoute, hashHistory} = require('react-router')

var store = require('store').configureStore()
var actions = require('actions')

var TodoAPI = require('TodoAPI')

import router from 'router'
import Login from 'login'
import Todo from 'todo'


store.dispatch(actions.startAddTodos())

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation()

//app css
require('style!css!sass!styles')

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={router}>
                <IndexRoute component={Login}/>
                <Route path="/todo" component={Todo}/>
            </Route>
        </Router>
    </Provider>,document.getElementById('app')
)
