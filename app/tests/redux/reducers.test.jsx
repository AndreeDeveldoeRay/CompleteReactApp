/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-07T02:28:01+01:00
* @Email:  me@andreeray.se
* @Filename: reducers.test.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-19T14:53:39+02:00
*/

var
    expect      = require('expect'),
    reducers    = require('reducers'),
    df  = require('deep-freeze-strict')

describe('Reducers ==========', () => {
    it('EXIST', () => {
        expect(reducers).toExist()
    })
    describe('Search ----------', () => {
        it('Should: set search', () => {
            var action = {
                type: 'SET_SEARCH_STRING',
                searchString: 'test'
            }
            var res = reducers.searchStringReducer(df(''),df(action))
            expect(res).toEqual(action.searchString)
        })
    })
    describe('Show ----------', () => {
        it('Should: toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }
            var res = reducers.showCompletedReducer(df(false),df(action))
            expect(res).toEqual(true)
        })
    })
    describe('Todos ----------', () => {
        it('Should: add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                todo: {
                    id: 'asd123',
                    text: 'test',
                    completed: false,
                    completedAt: 1234
                }
            }
            var res = reducers.todosReducer(df([]),df(action))
            expect(res.length).toEqual(1)
            expect(res[0]).toEqual(action.todo)
        })
        it('Should: update todo', () => {
            var todos = [{
                id: '123',
                text: 'test',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }]
            var updates = {
                completed: false,
                completedAt: null
            }
            var action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            }
            var res = reducers.todosReducer(df(todos),df(action))
            expect(res[0].completed).toEqual(updates.completed)
            expect(res[0].completedAt).toEqual(updates.completedAt)
            expect(res[0].text).toEqual(todos[0].text)
        })
        it('Should:ould add existing todos', () => {
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
            var res = reducers.todosReducer(df([]), df(action))
            expect(res[0]).toEqual(todos[0])
            expect(res.length).toEqual(1)
        })
    })
})
