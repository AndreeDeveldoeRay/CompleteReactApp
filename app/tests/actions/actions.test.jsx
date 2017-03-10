/**
* @Author: Andreee Ray <andreeray>
* @Date:   2017-03-06T18:34:54+01:00
* @Email:  me@andreeray.se
* @Filename: actions.test.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-10T03:23:01+01:00
*/



var expect = require('expect'), actions = require('actions')

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
    it('Should add todos',() => {
        var action = {
            type: 'ADD_TODO',
            text: 'test'
        }
        var res = actions.addTodo(action.text)
        expect(res).toEqual(action)
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
    it('Should toggle todo completed', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: 0
        }
        var res = actions.toggleTodo(action.id)
        expect(res).toEqual(action)
    })
})
