/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-03-06T18:34:34+01:00
 * @Email:  me@andreeray.se
 * @Filename: actions.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-06T14:09:05+02:00
 *
 * @Description:
 *   Instead of returning objects we return functions to be able to work
 *   with asynchronous calls using firebase.
*/

import moment from 'moment'
import firebase, {firebaseRef} from 'app/firebase'

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
export var addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
}
export var startAddTodo = (text) => {
    return (dispatch, getState) => {

        // normaly you would use node-uuid to create an id, but firebase takes care of it
        // normaly you would set completed att to undefined, but firebase takes a null value
        var todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        }

        var todoRef = firebaseRef.child('todos').push(todo)

        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }))
        })

    }
}
export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    }
}
export var updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    }
}
export var startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        var todoRef = firebaseRef.child(`todos/${id}`)
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        }
        todoRef.update(updates).then(() => {
            dispatch(updateTodo(id,updates))

            // logging the result
            firebaseRef.child(`todos/${id}/completed`).once('value').then((ss) => {
                console.log(`completed set to:`, ss.val())
            })
        }, (error) => {
            console.log('error',error)
        })
    }
}
