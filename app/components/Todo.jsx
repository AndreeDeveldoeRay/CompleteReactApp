/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T00:33:36+01:00
* @Email:  me@andreeray.se
* @Filename: TodoApp.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-01T04:05:33+01:00
*/



var React = require('react'), List = require('List'), AddItem = require('AddItem'), Search = require('Search'), uuid = require('node-uuid')

var Todo = React.createClass(
{
    getInitialState: function () {
        return {
            show: false,
            search: '',
            todos: [
                {
                    id: uuid(),
                    text: 'item 1',
                    completed: false
                }, {
                    id: uuid(),
                    text: 'item 2',
                    completed: true
                }
            ]
        }
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
    handleSearch: function (show, search)
    {
        this.setState({
            show: show,
            search: search.toLowerCase()
        })
    },
    render: function ()
    {
        var {todos} = this.state
        return (
        <div>
            <Search handleSearch={this.handleSearch}/>
            <List todos={todos} handleToggle={this.handleToggle}/>
            <AddItem handleAddItem={this.handleAddItem}/>
        </div>)
    }
})
module.exports = Todo
