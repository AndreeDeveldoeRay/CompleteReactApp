/**
* @Author: Andreee Ray <andreeray>
* @Date:   2017-03-06T18:34:34+01:00
* @Email:  me@andreeray.se
* @Filename: actions.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-03-06T19:00:50+01:00
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
        type: 'TOGGEL_TODO',
        id
    }
}
