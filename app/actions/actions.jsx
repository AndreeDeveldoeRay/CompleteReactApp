/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-06T18:34:34+01:00
* @Email:  me@andreeray.se
* @Filename: actions.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-08T01:33:14+01:00
*/



export var setSearchText = (search) => {
    return {
        type: 'SET_SEARCH_TEXT',
        search
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
export var toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}
