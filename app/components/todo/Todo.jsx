/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T00:33:36+01:00
* @Email:  me@andreeray.se
* @Filename: TodoApp.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-08T07:43:46+01:00
*/

var React = require('react'),
    AddItem = require('AddItem'),
    Search = require('Search'),
    uuid = require('node-uuid'),
    TodoAPI = require('TodoAPI'),
    moment = require('moment')

import List from 'List'

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
            <Search handleSearch={this.handleSearch}/>
            <List/>
            <AddItem handleAddItem={this.handleAddItem}/>
        </div>)
    }
})
module.exports = Todo
