/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-07T02:28:01+01:00
* @Email:  me@andreeray.se
* @Filename: reducers.test.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-07T03:20:43+01:00
*/

var Expect = require('expect'), Reducers = require('reducers'), DeepFreeze = require('deep-freeze-strict')

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                search: 'test'
            }
            var res = Reducers.searchTextReducer(DeepFreeze(''),DeepFreeze(action))
            Expect(res).toEqual(action.search)
        })
    })
    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }
            var res = Reducers.showCompletedReducer(DeepFreeze(false),DeepFreeze(action))
            Expect(res).toEqual(true)
        })
    })
})
