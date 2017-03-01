/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-03-01T04:35:03+01:00
* @Email:  me@andreeray.se
* @Filename: TodoAPI.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-01T04:59:47+01:00
*/


module.exports = {
    setTodos: function (todos)
    {
        if (Array.isArray(todos))
        {
            localStorage.setItem('todos',JSON.stringify(todos))
            return todos
        }
    },
    getTodos: function ()
    {
        var stringTodos = localStorage.getItem('todos')
        var todos = []
        try { todos = JSON.parse(stringTodos) } catch (e) {}
        return Array.isArray(todos) ? todos : []
    }
}
