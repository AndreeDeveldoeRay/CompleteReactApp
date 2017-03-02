/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-28T01:30:12+01:00
* @Email:  me@andreeray.se
* @Filename: Root.test.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-02T16:22:27+01:00
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
        Expect(todo.state.todos[0].createdAt).toBeA('number')
    })
    it('should toggle completed value when handleToggle is called', () =>
    {
        var data = {id:11,text:'test',completed:false,createdAt:0,completedAt:undefined}
        var todo = TestUtils.renderIntoDocument(<Todo/>)
        todo.setState({todos:[data]})
        Expect(todo.state.todos[0].completed).toBe(false)
        todo.handleToggle(11)
        Expect(todo.state.todos[0].completed).toBe(true)
        Expect(todo.state.todos[0].completedAt).toBeA('number')
    })
    it('should toggel should todo from complete to incomplete', () =>
    {
        var data = {id:11,text:'test',completed:true,createdAt:0,completedAt:123}
        var todo = TestUtils.renderIntoDocument(<Todo/>)
        todo.setState({todos:[data]})
        Expect(todo.state.todos[0].completed).toBe(true)
        todo.handleToggle(11)
        Expect(todo.state.todos[0].completed).toBe(false)
        Expect(todo.state.todos[0].completedAt).toNotExist()
    })
})
