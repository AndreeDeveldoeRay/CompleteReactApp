/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-02-28T00:22:35+01:00
* @Email:  me@andreeray.se
* @Filename: entry.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-27T13:42:18+02:00
*/

// IMPORTS ===================================================

import React, {component}   from 'react'
import ReactDOM             from 'react-dom'
import {Provider}           from 'react-redux'
import {hashHistory}        from 'react-router'

var store                   = require('store').configureStore()
var actions                 = require('actions')

import router               from 'app/router'
import firebase             from 'app/firebase'


// Firebase authentication -----------------------------------

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(actions.login(user.uid, user.displayName))
        store.dispatch(actions.startAddTodos())
        hashHistory.push('/todo')
    }
    else {
        store.dispatch(actions.logout())
        hashHistory.push('/')
    }
})


// Foundation ------------------------------------------------

require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation()


// Syling ----------------------------------------------------

require('style!css!sass!styles')


// Render ====================================================
ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,document.getElementById('app')
)
