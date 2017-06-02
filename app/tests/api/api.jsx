/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-03-02T10:33:23+01:00
* @Email:  me@andreeray.se
* @Filename: TodoAPI.test.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-06-02T12:54:45+02:00
*/


var Expect = require('expect'), api = require('api')

describe('TodoAPI ==========', () =>
{
    beforeEach(()=> { localStorage.removeItem('todos') })
    it('EXIST', () => { Expect(api).toExist() })

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
            var filteredTodos = api.filterTodos(todos,true,'')
            Expect(filteredTodos.length).toBe(3)
        })
        it('Should: return all uncompleted items if showCompleted is false', () =>
        {
            var filteredTodos = api.filterTodos(todos,false,'')
            Expect(filteredTodos.length).toBe(1)
        })
        it('Should: sort by completed status', () =>
        {
            var filteredTodos = api.filterTodos(todos,true,'')
            Expect(filteredTodos[0].completed).toBe(false)
        })
        it('Should: filter todos by search', () =>
        {
            var filteredTodos = api.filterTodos(todos,true,'Some')
            Expect(filteredTodos.length).toBe(1)
        })
        it('Should: return all todos if search is empty', () =>
        {
            var filteredTodos = api.filterTodos(todos,true,'')
            Expect(filteredTodos.length).toBe(3)
        })
    })
})
