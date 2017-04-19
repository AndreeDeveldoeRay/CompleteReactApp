/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-28T01:37:31+01:00
* @Email:  me@andreeray.se
* @Filename: Item.test.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-19T14:49:25+02:00
*/



var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    Expect = require('expect'),
    $ = require('jQuery')

import * as actions from 'actions'
import {Item} from 'Item'

describe('Item ===========', () => {

    it('EXIST', () => { Expect(Item).toExist() })

    it('Should: dispatch TOGGLE_TODO action on click', () => {

        var data = {
            id:1099,
            text:'test',
            completed:true
        }

        var action = actions.startToggleTodo(data.id, !data.completed)
        var spy = Expect.createSpy()
        var item = TestUtils.renderIntoDocument(<Item {...data} dispatch={spy}/>)
        var $el = $(ReactDOM.findDOMNode(item))
        TestUtils.Simulate.click($el[0])

        Expect(spy).toHaveBeenCalledWith(action)
    })
})
