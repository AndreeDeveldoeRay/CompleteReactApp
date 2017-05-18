/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-03-01T04:35:03+01:00
* @Email:  me@andreeray.se
* @Filename: TodoAPI.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-19T12:55:25+02:00
*/


export default {
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
