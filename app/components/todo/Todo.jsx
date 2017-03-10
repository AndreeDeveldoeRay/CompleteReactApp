/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T00:33:36+01:00
* @Email:  me@andreeray.se
* @Filename: TodoApp.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-10T02:32:48+01:00
*/

var React = require('react'),
    uuid = require('node-uuid'),
    TodoAPI = require('TodoAPI'),
    moment = require('moment')

import List from 'List'
import AddItem from 'AddItem'
import Search from 'Search'

var Todo = React.createClass(
{
    getInitialState: function () {
        return {
            todos: TodoAPI.getTodos(),
            showCompleted: false,
            search: ''
        }
    },
    componentDidUpdate: function ()
    {
        TodoAPI.setTodos(this.state.todos)
    },
    handleAddItem: function (text)
    {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text:text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        })
    },
    handleSearch: function (showCompleted, search)
    {
        this.setState({
            showCompleted: showCompleted,
            search: search.toLowerCase()
        })
    },
    render: function ()
    {
        var {todos,showCompleted,search} = this.state
        var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,search)
        return (
        <div>
            <Search/>
            <List/>
            <AddItem handleAddItem={this.handleAddItem}/>
        </div>)
    }
})
module.exports = Todo
