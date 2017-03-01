/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-28T01:37:31+01:00
* @Email:  me@andreeray.se
* @Filename: Item.test.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-01T04:28:23+01:00
*/



var React = require('react'), ReactDOM = require('react-dom'), TestUtils = require('react-addons-test-utils'), Expect = require('expect'), Item = require('Item'), $ = require('jQuery')

describe('Item', () =>
{
    it('exists', () =>
    {
        Expect(Item).toExist()
    })
    it('should call handleToggle prop with id on click', () =>
    {
        var data = {id:1099,text:'test',completed:true}
        var spy = Expect.createSpy()
        var item = TestUtils.renderIntoDocument(<Item {...data} handleToggle={spy}/>)
        var $el = $(ReactDOM.findDOMNode(item))
        TestUtils.Simulate.click($el[0])
        Expect(spy).toHaveBeenCalledWith(1099)
    })
})
