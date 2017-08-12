/**
* @Author: Andreee Ray <andreeray>
* @Date:   2017-03-06T18:34:54+01:00
* @Email:  me@andreeray.se
* @Filename: actions.test.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-06-02T13:02:35+02:00
*/

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
var expect = require('expect')
var actions = require('actions')
import firebase, {firebaseRef} from 'app/firebase'

var createMockStore = configureMockStore([thunk])

describe('Actions ==========', () => {
    it('EXIST', () => {
        expect(actions).toExist()
    })
    it('Should: generate search text action',() => {
        var action = {
            type: 'SET_SEARCH_STRING',
            searchString: 'test'
        }
        var res = actions.setSearchString(action.searchString)
        expect(res).toEqual(action)
    })
    it('Should: toggle completed todos',() => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED',
        }
        var res = actions.toggleShowCompleted()
        expect(res).toEqual(action)
    })
    it('Should: generate add todo action',() => {
        var action = {
            type: 'ADD_TODO',
            todo: {
                id: 'asd123',
                text: 'test',
                completed: false,
                completedAt: 1234
            }
        }
        var res = actions.addTodo(action.todo)
        expect(res).toEqual(action)
    })
    it('Should: generate add todos action object', () => {
        var todos = [{
            id: 0,
            text: 'test',
            completed: false,
            completedAt: undefined,
            createdAt: 33000
        }]
        var action = {
            type: 'ADD_TODOS',
            todos
        }
        var res = actions.addTodos(todos)
        expect(res).toEqual(action)
    })
    it('Should: generate update todo action', () => {
        var action = {
            type: 'UPDATE_TODO',
            id: 0,
            updates: {completed: false}
        }
        var res = actions.updateTodo(action.id, action.updates)
        expect(res).toEqual(action)
    })
    it('Should: generate login action object', () => {
        const action = {
            type: 'LOGIN',
            uid: '123abc',
            displayName: undefined
        }
        const res = actions.login(action.uid)
        expect(res).toEqual(action)
    })
    it('Should: generate logout action object', () => {
        const action = {type: 'LOGOUT'}
        const res = actions.logout()
        expect(res).toEqual(action)
    })
    describe('Asyncronous tests on firebase ----------', () => {

        var

          testTodoRef,
          uid,
          todosRef

        beforeEach((done) => {

            var credential = firebase.auth.GithubAuthProvider.credential(process.env.GITHUB_ACCESS_TOKEN)

            console.log(credential)

            firebase.auth().signInWithCredential(credential).then((user) => {

              uid = user.uid
              todosRef = firebaseRef.child(`users/${uid}/todos`)

              return todosRef.remove()

            }).then(() => {
                testTodoRef = firebaseRef.push()

                return testTodoRef.set({
                    text: 'Tests with firebase',
                    completed: false,
                    createdAt: 23354345
                })
            })
            .then(() => done())
            .catch(done)

        })

        afterEach((done) => {
            todosRef.remove().then(() => done())
        })

        it('Should: add todos and dispatch ADD_TODOS action', (done) => {
            const
                store = createMockStore({auth: {uid, displayName: "Test User"}}),
                action = actions.startAddTodos()

            store.dispatch(action).then(() => {
                const
                    mockAction = store.getActions()

                expect(mockAction[0].type).toEqual('ADD_TODOS')
                expect(mockAction[0].todos.length).toEqual(1)
                expect(mockAction[0].todos[0].text).toEqual('Tests with firebase')

                done()
            }, done)
        })

        it('Should: toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({auth: {uid, displayName: "Test User"}})
            const action = actions.startToggleTodo(testTodoRef.key, true)

            store.dispatch(action).then(() => {

                const mockActions = store.getActions()

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key
                })
                expect(mockActions[0].updates).toInclude({ completed: true })
                expect(mockActions[0].updates.completedAt).toExist()
                done()
            }, done)
        })
        it('Should: create todo and dispatch ADD_TODO', (done) => {
            const store = createMockStore({auth: {uid, displayName: "Test User"}})
            const todoText = 'should create todo and dispatch ADD_TODO'

            store.dispatch(actions.startAddTodo(todoText)).then(() => {
                const actions = store.getActions()
                expect(actions[0]).toInclude({
                    type: 'ADD_TODO'
                })
                expect(actions[0].todo).toInclude({
                    text: todoText
                })
                done()
            }).catch(done)

        })
    })
})
