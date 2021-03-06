/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-03-06T18:34:34+01:00
 * @Email:  me@andreeray.se
 * @Filename: actions.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-28T19:45:34+02:00
 *
 * @Description:
 *   Instead of returning objects we return functions to be able to work
 *   with asynchronous calls using firebase.
*/

import moment from 'moment'
import firebase, {firebaseRef, githubProvider} from 'app/firebase'



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

        var uid = getState().auth.uid
        var displayName = getState().auth.displayName
        var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo)

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
export var startAddTodos = () => {
    return (dispatch, getState) => {
        var
            uid = getState().auth.uid,
            displayName = getState().auth.displayName,
            todosRef = firebaseRef.child(`users/${uid}/todos`)

        return todosRef.once('value').then((snapshot) => {
            var
                todos   = snapshot.val() || {},
                parsed  = []

            Object.keys(todos).forEach((id) => {
                parsed.push({
                    id,
                    ...todos[id]
                })
            })
            dispatch(addTodos(parsed))
        })
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

        var uid = getState().auth.uid
        var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`)
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        }

        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id,updates))

            // logging the result
            firebaseRef.child(`users/${uid}/todos/${id}/completed`).once('value').then((ss) => {
                console.log(`completed set to:`, ss.val())
            })
        }, (error) => {
            console.log('error',error)
        })

    }

}




export var login = (uid, displayName) => {
    return {
        type: 'LOGIN',
        uid,
        displayName
    }
}

export var startLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then((result) => {
            console.log("authenticated", result)
        }, (error) => {
            console.log("unable to authenticate", error)
        })
    }
}




export var logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log("logged out")
        })
    }
}
