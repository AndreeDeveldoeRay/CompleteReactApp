/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-02-28T00:22:35+01:00
* @Email:  me@andreeray.se
* @Filename: entry.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-05T20:24:57+02:00
*/

import React, {component} from 'react'
import ReactDOM from 'react-dom'
var {Provider} = require('react-redux')
var Todo = require('Todo')
var actions = require('actions')
var store = require('store').configureStore()
var TodoAPI = require('TodoAPI')

store.subscribe(() => {
  var state = store.getState()
  TodoAPI.setTodos(state.todos)
})

var initialTodos = TodoAPI.getTodos()
store.dispatch(actions.addTodos(initialTodos))

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation()

//app css
require('style!css!sass!styles')

ReactDOM.render(
    <Provider store={store}>
        <Todo/>
    </Provider>,
    document.getElementById('app')
)
