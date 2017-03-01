/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-28T01:30:12+01:00
* @Email:  me@andreeray.se
* @Filename: Root.test.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-01T04:13:16+01:00
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
    it('should toggle completed value when handleToggle is called', () =>
    {
        var data = {id:11,text:'test',completed:false}
        var todo = TestUtils.renderIntoDocument(<Todo/>)
        todo.setState({todos:[data]})
        Expect(todo.state.todos[0].completed).toBe(false)
        todo.handleToggle(11)
        Expect(todo.state.todos[0].completed).toBe(true)
    })
})
