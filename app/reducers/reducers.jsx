/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-07T02:16:23+01:00
* @Email:  me@andreeray.se
* @Filename: reducers.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-07T03:22:11+01:00
*/

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
