/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-28T01:38:02+01:00
* @Email:  me@andreeray.se
* @Filename: List.test.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-08T08:46:14+01:00
*/



var React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    TestUtils = require('react-addons-test-utils'),
    Expect = require('expect'),
    $ = require('jQuery')

import {store} from 'store'
import ConnectedList, {List} from 'List'
import ConnectedItem, {Item} from 'Item'

describe('List', () =>
{
    it('exists', () =>
    {
        Expect(List).toExist()
    })
    it('should render one Item component for each items', () =>
    {
        var todos = [{
            id:1,
            text: 'test',
            completed: false,
            completedAt: undefined,
            createdAt: 500
        }, {
            id:2,
            text: 'test 2',
            completed: false,
            completedAt: undefined,
            createdAt: 500
        }]
        var st = store({
            todos
        })
        var provider = TestUtils.renderIntoDocument(
            <Provider store={st}>
                <ConnectedList/>
            </Provider>
        )
        var list = TestUtils.scryRenderedComponentsWithType(provider, ConnectedList)[0]
        var listComponents = TestUtils.scryRenderedComponentsWithType(list, ConnectedItem)
        Expect(listComponents.length).toBe(todos.length)
    })
    it('should render empty message if no todos', () =>
    {
        var todos = []
        var list = TestUtils.renderIntoDocument(<List todos={todos}/>)
        var $el = $(ReactDOM.findDOMNode(list))
        Expect($el.find('.contain__message').length).toBe(1)
    })
})
