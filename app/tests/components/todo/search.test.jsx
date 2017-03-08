/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-28T01:30:12+01:00
* @Email:  me@andreeray.se
* @Filename: Root.test.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-01T02:22:22+01:00
*/



var React = require('react'), ReactDOM = require('react-dom'), TestUtils = require('react-addons-test-utils'), Expect = require('expect'), Search = require('Search')

describe('Search', () =>
{
    it('exists', () =>
    {
        Expect(Search).toExist()
    })
    it('should call handleSearch with entered input text', () =>
    {
        var spy = Expect.createSpy()
        var text = "test"
        var search = TestUtils.renderIntoDocument(<Search handleSearch={spy}/>)
        search.refs.textSearch.value = text
        TestUtils.Simulate.change(search.refs.textSearch)
        Expect(spy).toHaveBeenCalledWith(false,'test')
    })
    it('should call handleSearch with proper checked value', () =>
    {
        var spy = Expect.createSpy()
        var search = TestUtils.renderIntoDocument(<Search handleSearch={spy}/>)
        search.refs.checkboxShow.checked = true
        TestUtils.Simulate.change(search.refs.checkboxShow)
        Expect(spy).toHaveBeenCalledWith(true, '')
    })
})
