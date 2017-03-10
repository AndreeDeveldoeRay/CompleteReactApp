/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T01:48:53+01:00
* @Email:  me@andreeray.se
* @Filename: store.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-10T02:07:27+01:00
*/



var redux = require('redux'), {searchStringReducer, showCompletedReducer, todosReducer} = require('reducers')

export var store = (init = {}) => {
    var reducer = redux.combineReducers({
        searchString: searchStringReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    })
    var store = redux.createStore(reducer, init, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f))
    return store
}
