/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-03-02T10:33:23+01:00
* @Email:  me@andreeray.se
* @Filename: TodoAPI.test.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-19T14:49:08+02:00
*/


var Expect = require('expect'), TodoAPI = require('TodoAPI')

describe('TodoAPI ==========', () =>
{
    beforeEach(()=> { localStorage.removeItem('todos') })
    it('EXIST', () => { Expect(TodoAPI).toExist() })

    describe('filteredTodos ----------', () =>
    {
        var todos = [
            {
                id: 1,
                text:'Some test1',
                completed: true
            },
            {
                id: 2,
                text:'test2',
                completed: false
            },
            {
                id: 3,
                text:'test3',
                completed: true
            }
        ]
        it('Should: return all items if showCompleted is true', () =>
        {
            var filteredTodos = TodoAPI.filterTodos(todos,true,'')
            Expect(filteredTodos.length).toBe(3)
        })
        it('Should: return all uncompleted items if showCompleted is false', () =>
        {
            var filteredTodos = TodoAPI.filterTodos(todos,false,'')
            Expect(filteredTodos.length).toBe(1)
        })
        it('Should: sort by completed status', () =>
        {
            var filteredTodos = TodoAPI.filterTodos(todos,true,'')
            Expect(filteredTodos[0].completed).toBe(false)
        })
        it('Should: filter todos by search', () =>
        {
            var filteredTodos = TodoAPI.filterTodos(todos,true,'Some')
            Expect(filteredTodos.length).toBe(1)
        })
        it('Should: return all todos if search is empty', () =>
        {
            var filteredTodos = TodoAPI.filterTodos(todos,true,'')
            Expect(filteredTodos.length).toBe(3)
        })
    })
})
