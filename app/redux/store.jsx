/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T01:48:53+01:00
* @Email:  me@andreeray.se
* @Filename: store.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-06-02T12:45:56+02:00
*/



import * as redux from 'redux'
import thunk from 'redux-thunk'
import {searchStringReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers'


export var configureStore = (init = {}) => {
    var reducer = redux.combineReducers({
        searchString: searchStringReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer,
        auth: authReducer
    })
    var store = redux.createStore(reducer, init, redux.compose(redux.applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))
    return store
}
