/**
* @Author: Andreee Ray <andreeray>
* @Date:   2017-03-06T18:34:54+01:00
* @Email:  me@andreeray.se
* @Filename: actions.test.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-07T02:52:05+01:00
*/



var expect = require('expect'), actions = require('actions')

describe('Actions', () => {
    it('Should generate search text action',() => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            search: 'test'
        }
        var res = actions.setSearchText(action.search)
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
    it('Should toggle todo completed', () => {
        var action = {
            type: 'TOGGEL_TODO',
            id: 0
        }
        var res = actions.toggleTodo(action.id)
        expect(res).toEqual(action)
    })
})
