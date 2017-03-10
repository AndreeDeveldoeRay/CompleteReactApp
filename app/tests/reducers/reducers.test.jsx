/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-07T02:28:01+01:00
* @Email:  me@andreeray.se
* @Filename: reducers.test.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-10T02:42:57+01:00
*/

var expect = require('expect'), reducers = require('reducers'), deepfreeze = require('deep-freeze-strict')

describe('reducers', () => {
    describe('searchStringReducer', () => {
        it('should set search', () => {
            var action = {
                type: 'SET_SEARCH_STRING',
                searchString: 'test'
            }
            var res = reducers.searchStringReducer(deepfreeze(''),deepfreeze(action))
            expect(res).toEqual(action.searchString)
        })
    })
    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }
            var res = reducers.showCompletedReducer(deepfreeze(false),deepfreeze(action))
            expect(res).toEqual(true)
        })
    })
    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'test'
            }
            var res = reducers.todosReducer(deepfreeze([]),deepfreeze(action))
            expect(res.length).toEqual(1)
            expect(res[0].text).toEqual(action.text)
        })
        it('should toggle todo', () => {
            var todos = [{
                id: '123',
                text: 'test',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }]
            var action = {
                type: 'TOGGLE_TODO',
                id: '123'
            }
            var res = reducers.todosReducer(deepfreeze(todos),deepfreeze(action))
            expect(res[0].completed).toEqual(false)
            expect(res[0].completedAt).toEqual(undefined)
        })
    })
})
