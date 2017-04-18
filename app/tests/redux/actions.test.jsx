/**
* @Author: Andreee Ray <andreeray>
* @Date:   2017-03-06T18:34:54+01:00
* @Email:  me@andreeray.se
* @Filename: actions.test.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-18T15:33:27+02:00
*/

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
var expect = require('expect')
var actions = require('actions')
import firebase, {firebaseRef} from 'app/firebase'

var createMockStore = configureMockStore([thunk])

describe('Actions', () => {
    it('Should generate search text action',() => {
        var action = {
            type: 'SET_SEARCH_STRING',
            searchString: 'test'
        }
        var res = actions.setSearchString(action.searchString)
        expect(res).toEqual(action)
    })
    it('Should toggle completed todos',() => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED',
        }
        var res = actions.toggleShowCompleted()
        expect(res).toEqual(action)
    })
    it('Should generate add todo action',() => {
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
    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({})
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
    it('should generate add todos action object', () => {
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
    it('Should generate update todo action', () => {
        var action = {
            type: 'UPDATE_TODO',
            id: 0,
            updates: {completed: false}
        }
        var res = actions.updateTodo(action.id, action.updates)
        expect(res).toEqual(action)
    })
    describe('Tests with firebase', () => {
        var testTodoRef;

        beforeEach((done) => {
            testTodoRef = firebaseRef.child('todos').push()

            testTodoRef.set({
                text: 'Tests with firebase',
                completed: false,
                createdAt: 23354345
            }).then( () => done() )
        })

        afterEach((done) => {
            testTodoRef.remove().then(() => done())
        })

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({})
            const action = actions.startToggleTodo(testTodoRef.key, true)

            console.log(action)

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
    })
})
