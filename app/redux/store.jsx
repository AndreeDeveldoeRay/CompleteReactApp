/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T01:48:53+01:00
* @Email:  me@andreeray.se
* @Filename: store.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-05T20:24:38+02:00
*/



import * as redux from 'redux'
import thunk from 'redux-thunk'
import {searchStringReducer, showCompletedReducer, todosReducer} from 'reducers'


export var configureStore = (init = {}) => {
    var reducer = redux.combineReducers({ searchString: searchStringReducer, showCompleted: showCompletedReducer, todos: todosReducer })
    var store = redux.createStore(reducer, init, redux.compose(redux.applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))
    return store
}
