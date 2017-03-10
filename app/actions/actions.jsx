/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-06T18:34:34+01:00
* @Email:  me@andreeray.se
* @Filename: actions.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-10T03:20:16+01:00
*/



export var setSearchString = (searchString) => {
    return {
        type: 'SET_SEARCH_STRING',
        searchString
    }
}
export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
}
export var addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    }
}
export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    }
}
export var toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}
