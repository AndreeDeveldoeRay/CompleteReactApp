/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-28T02:44:40+01:00
* @Email:  me@andreeray.se
* @Filename: AddItem.test.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-08T09:00:41+01:00
*/



var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    Expect = require('expect'),
    $ = require('jQuery')

var {AddItem} = require('AddItem')

describe('AddItem', () =>
{
    it('exists', () =>
    {
        Expect(AddItem).toExist()
    })
    it('should dispatch ADD_TODO when valid todo text', () =>
    {
        var todoText = 'text'
        var action = {
            type: 'ADD_TODO',
            text: todoText
        }
        var spy = Expect.createSpy()
        var addItem = TestUtils.renderIntoDocument(<AddItem dispatch={spy}/>)
        var $el = $(ReactDOM.findDOMNode(addItem))
        addItem.refs.text.value = todoText
        TestUtils.Simulate.submit($el.find('form')[0])
        Expect(spy).toHaveBeenCalledWith(action)
    })
    it('should not dispatch ADD_TODO when invalid todo text', () =>
    {
        var todoText = ''
        var spy = Expect.createSpy()
        var addItem = TestUtils.renderIntoDocument(<AddItem dispatch={spy}/>)
        var $el = $(ReactDOM.findDOMNode(addItem))
        addItem.refs.text.value = todoText
        TestUtils.Simulate.submit($el.find('form')[0])
        Expect(spy).toNotHaveBeenCalled()
    })
})
