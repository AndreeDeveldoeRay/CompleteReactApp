/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-28T01:37:31+01:00
* @Email:  me@andreeray.se
* @Filename: Item.test.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-08T06:45:08+01:00
*/



var React = require('react'), ReactDOM = require('react-dom'), TestUtils = require('react-addons-test-utils'), Expect = require('expect'), $ = require('jQuery'), {Item} = require('Item')

describe('Item', () =>
{
    it('exists', () =>
    {
        Expect(Item).toExist()
    })
    it('should dispatch TOGGLE_TODO action on click', () =>
    {
        var data = {
            id:1099,
            text:'test',
            completed:true
        }
        var spy = Expect.createSpy()
        var item = TestUtils.renderIntoDocument(<Item {...data} dispatch={spy}/>)
        var $el = $(ReactDOM.findDOMNode(item))
        TestUtils.Simulate.click($el[0])
        Expect(spy).toHaveBeenCalledWith({
            type: 'TOGGLE_TODO',
            id: data.id
        })
    })
})
