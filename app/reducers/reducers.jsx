/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-07T02:16:23+01:00
* @Email:  me@andreeray.se
* @Filename: reducers.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-08T09:11:09+01:00
*/

var uuid = require('node-uuid'), moment = require('moment')

export var searchTextReducer = (state = '', action) => {
    switch (action.type)
    {
        case 'SET_SEARCH_TEXT':
            return action.search
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
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: uuid(),
                    text: action.text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    var nextCompleted = !todo.completed
                    return {
                        ...todo,
                        completed: nextCompleted,
                        completedAt: nextCompleted ? moment().unix() : undefined
                    }
                } else {
                    return todo
                }
            })
        default:
            return state
    }
}
