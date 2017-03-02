/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T00:33:36+01:00
* @Email:  me@andreeray.se
* @Filename: TodoApp.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-02T11:41:05+01:00
*/



var React = require('react'), List = require('List'), AddItem = require('AddItem'), Search = require('Search'), uuid = require('node-uuid'), TodoAPI = require('TodoAPI')

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
                    completed: false
                }
            ]
        })
    },
    handleToggle: function (id) {
        var todos = this.state.todos.map((todo)=>{
            if (todo.id === id) todo.completed = !todo.completed
            return todo
        })
        this.setState({todos:todos})
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
            <List todos={filteredTodos} handleToggle={this.handleToggle}/>
            <AddItem handleAddItem={this.handleAddItem}/>
        </div>)
    }
})
module.exports = Todo
