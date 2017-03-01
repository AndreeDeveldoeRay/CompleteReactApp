/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-28T01:30:12+01:00
* @Email:  me@andreeray.se
* @Filename: Root.test.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-01T03:12:34+01:00
*/



var React = require('react'), ReactDOM = require('react-dom'), TestUtils = require('react-addons-test-utils'), Expect = require('expect'), Todo = require('Todo')

describe('Todo', () =>
{
    it('exists', () =>
    {
        Expect(Todo).toExist()
    })
    it('should add todo to the todos state on handleAddTodo', () =>
    {
        var text = 'test'
        var todo = TestUtils.renderIntoDocument(<Todo/>)
        todo.setState({todos:[]})
        todo.handleAddItem(text)
        Expect(todo.state.todos[0].text).toBe(text)
    })
})
