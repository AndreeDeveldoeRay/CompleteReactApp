/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-07T02:16:23+01:00
* @Email:  me@andreeray.se
* @Filename: reducers.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-06T13:58:35+02:00
*/

var uuid = require('node-uuid'), moment = require('moment')

export var searchStringReducer = (state = '', action) => {
    switch (action.type)
    {
        case 'SET_SEARCH_STRING':
            return action.searchString
        default:
            return state
    }
}
export var showCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state
        default:
            return state
    }
}
export var todosReducer = (state = [], action) => {

    switch (action.type)
    {
        case 'ADD_TODO':
            return [
                ...state,
                action.todo
            ]
        case 'ADD_TODOS':
            return [
                ...state,
                ...action.todos
            ]
        case 'UPDATE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        ...action.updates
                    }
                } else {
                    return todo
                }
            })
        default:
            return state
    }
}
