/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-28T02:44:40+01:00
* @Email:  me@andreeray.se
* @Filename: AddItem.test.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-02-28T02:59:41+01:00
*/



var React = require('react'), ReactDOM = require('react-dom'), TestUtils = require('react-addons-test-utils'), Expect = require('expect'), $ = require('jQuery'), AddItem = require('AddItem')

describe('AddItem', () =>
{
    it('exists', () =>
    {
        Expect(AddItem).toExist()
    })
    it('should call handleAddItem prop with valid data', () =>
    {
        var spy = Expect.createSpy()
        var addItem = TestUtils.renderIntoDocument(<AddItem handleAddItem={spy}/>)
        var $el = $(ReactDOM.findDOMNode(addItem))
        var text = 'text'
        addItem.refs.text.value = text
        TestUtils.Simulate.submit($el.find('form')[0])
        Expect(spy).toHaveBeenCalledWith(text)
    })
    it('should not call handleAddItem prop with invalid data', () =>
    {
        var spy = Expect.createSpy()
        var addItem = TestUtils.renderIntoDocument(<AddItem handleAddItem={spy}/>)
        var $el = $(ReactDOM.findDOMNode(addItem))
        var text = ''
        addItem.refs.text.value = text
        TestUtils.Simulate.submit($el.find('form')[0])
        Expect(spy).toNotHaveBeenCalled(text)
    })
})
