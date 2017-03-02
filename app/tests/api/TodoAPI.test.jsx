/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-03-02T10:33:23+01:00
* @Email:  me@andreeray.se
* @Filename: TodoAPI.test.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-02T13:16:10+01:00
*/



var Expect = require('expect'), TodoAPI = require('TodoAPI')

describe('TodoAPI', () =>
{
    beforeEach(()=>
    {
        localStorage.removeItem('todos')
    })
    it('exist', () =>
    {
        Expect(TodoAPI).toExist()
    })
    describe('setTodos', () =>
    {
        it('should set valid todos array', () =>
        {
            var data = [{id:1,text:'test',completed:false}]
            TodoAPI.setTodos(data)
            var actualData = JSON.parse(localStorage.getItem('todos'))
            Expect(actualData).toEqual(data)
        })
        it('should not set invalid todos array', () =>
        {
            var badData = {a:'b'}
            TodoAPI.setTodos(badData)
            Expect(localStorage.getItem('todos')).toBe(null)
        })

    })
    describe('getTodos', () =>
    {
        it('should return empty array for bad localStorage data', () =>
        {
            var actualTodos = TodoAPI.getTodos()
            Expect(actualTodos).toEqual([])
        })
        it('should return todos if valid array in localStorage', () =>
        {
            var data = [{id:1,text:'test',completed:false}]
            localStorage.setItem('todos',JSON.stringify(data))
            var actualData = TodoAPI.getTodos()
            Expect(actualData).toEqual(data)
        })
    })
    describe('filteredTodos', () =>
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
        it('should return all items if showCompleted is true', () =>
        {
            var filteredTodos = TodoAPI.filterTodos(todos,true,'')
            Expect(filteredTodos.length).toBe(3)
        })
        it('should return all uncompleted items if showCompleted is false', () =>
        {
            var filteredTodos = TodoAPI.filterTodos(todos,false,'')
            Expect(filteredTodos.length).toBe(1)
        })
        it('should sort by completed status', () =>
        {
            var filteredTodos = TodoAPI.filterTodos(todos,true,'')
            Expect(filteredTodos[0].completed).toBe(false)
        })
        it('should filter todos by search', () =>
        {
            var filteredTodos = TodoAPI.filterTodos(todos,true,'Some')
            Expect(filteredTodos.length).toBe(1)
        })
        it('should return all todos if search is empty', () =>
        {
            var filteredTodos = TodoAPI.filterTodos(todos,true,'')
            Expect(filteredTodos.length).toBe(3)
        })
    })
})
