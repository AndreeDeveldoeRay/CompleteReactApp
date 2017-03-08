/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-28T01:30:12+01:00
* @Email:  me@andreeray.se
* @Filename: Root.test.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-08T07:46:19+01:00
*/

var React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    TestUtils = require('react-addons-test-utils'),
    Expect = require('expect'),
    Store = require('store'),
    Todo = require('Todo')

import List from 'List'

describe('Todo', () => {
    it('exists', () => {
        Expect(Todo).toExist()
    })
    it('should render list', () => {
        var store = Store.store()
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <Todo/>
            </Provider>
        )
        var todo = TestUtils.scryRenderedComponentsWithType(provider,Todo)[0]
        var list = TestUtils.scryRenderedComponentsWithType(todo,List)
        Expect(list.length).toEqual(1)
    })
})
