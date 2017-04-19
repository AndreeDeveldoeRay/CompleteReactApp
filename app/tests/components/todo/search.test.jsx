/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-01T01:59:52+01:00
* @Email:  me@andreeray.se
* @Filename: search.test.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-19T14:49:31+02:00
*/



var React = require('react'), ReactDOM = require('react-dom'), TestUtils = require('react-addons-test-utils'), Expect = require('expect')
import {Search} from 'Search'

describe('Search ==========', () =>
{
    it('EXIST', () =>
    {
        Expect(Search).toExist()
    })
    it('Should: dispatch SET_SEARCH_STRING on input change', () =>
    {
        var text = "test"
        var action = {
            type: 'SET_SEARCH_STRING',
            searchString: 'test'
        }
        var spy = Expect.createSpy()
        var search = TestUtils.renderIntoDocument(<Search dispatch={spy}/>)
        search.refs.searchString.value = text
        TestUtils.Simulate.change(search.refs.searchString)
        Expect(spy).toHaveBeenCalledWith(action)
    })
    it('Should: dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () =>
    {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        var spy = Expect.createSpy()
        var search = TestUtils.renderIntoDocument(<Search dispatch={spy}/>)
        search.refs.showCompleted.checked = true
        TestUtils.Simulate.change(search.refs.showCompleted)
        Expect(spy).toHaveBeenCalledWith(action)
    })
})
