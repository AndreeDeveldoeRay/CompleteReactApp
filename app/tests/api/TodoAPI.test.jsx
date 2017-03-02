/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-03-02T10:33:23+01:00
* @Email:  me@andreeray.se
* @Filename: TodoAPI.test.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-02T10:57:33+01:00
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
})
