/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-28T01:38:02+01:00
* @Email:  me@andreeray.se
* @Filename: List.test.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-02-28T02:45:29+01:00
*/



var React = require('react'), ReactDOM = require('react-dom'), TestUtils = require('react-addons-test-utils'), Expect = require('expect'),
List = require('List'), Item = require('Item')

describe('List', () =>
{
    it('exists', () =>
    {
        Expect(List).toExist()
    })
    it('should render one Item component for each items', () =>
    {
        var todos = [ {id:1}, {id:2} ]
        var list = TestUtils.renderIntoDocument(<List todos={todos}/>)
        var listComponents = TestUtils.scryRenderedComponentsWithType(list, Item)
        Expect(listComponents.length).toBe(todos.length)
    })
})
