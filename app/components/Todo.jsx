/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T00:33:36+01:00
* @Email:  me@andreeray.se
* @Filename: TodoApp.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-01T03:03:39+01:00
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
                    text: 'Walk the dog'
                }, {
                    id: uuid(),
                    text: 'Clean the yard'
                }, {
                    id: uuid(),
                    text: 'Create a modal for andreeray.se'
                }, {
                    id: uuid(),
                    text: 'Start my app'
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
                    text:text,
                    id: uuid()
                }
            ]
        })
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
            <List todos={todos}/>
            <AddItem handleAddItem={this.handleAddItem}/>
        </div>)
    }
})
module.exports = Todo
