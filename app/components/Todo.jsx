/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T00:33:36+01:00
* @Email:  me@andreeray.se
* @Filename: TodoApp.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-01T01:59:34+01:00
*/



var React = require('react'), List = require('List'), AddItem = require('AddItem'), Search = require('Search')

var Todo = React.createClass(
{
    getInitialState: function () {
        return {
            show: false,
            search: '',
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                }, {
                    id: 2,
                    text: 'Clean the yard'
                }, {
                    id: 3,
                    text: 'Create a modal for andreeray.se'
                }, {
                    id: 4,
                    text: 'Start my app'
                }
            ]
        }
    },
    handleAddItem: function (text)
    {
        console.log('text: ', text)
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
