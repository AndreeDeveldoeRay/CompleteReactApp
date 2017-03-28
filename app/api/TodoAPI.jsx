/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-03-01T04:35:03+01:00
* @Email:  me@andreeray.se
* @Filename: TodoAPI.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-19T19:37:15+01:00
*/


module.exports = {
    setTodos: function (todos) {
        if (Array.isArray(todos)) {
            localStorage.setItem('todos',JSON.stringify(todos))
            return todos
        }
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos')
        var todos = []
        try { todos = JSON.parse(stringTodos) } catch (e) {}
        return Array.isArray(todos) ? todos : []
    },
    filterTodos: function (todos, showCompleted, search) {

        var filteredTodos = todos.filter((todo) => {
            return !todo.completed || showCompleted
        })

        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase()
            return search.length === 0 || todo.text.indexOf(search) > - 1
        })

        filteredTodos.sort((a,b) => {
            if (!a.completed && b.completed) return - 1
            else if (a.completed && !b.completed) return 1
            else return 0
        })

        return filteredTodos
    }
}
