/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T01:37:31+01:00
* @Email:  me@andreeray.se
* @Filename: Item.test.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-28T01:40:48+01:00
*/


var React = require('react'), ReactDOM = require('react-dom'), TestUtils = require('react-addons-test-utils'), Expect = require('expect'), Item = require('Item')

describe('Item', () =>
{
    it('exists', () =>
    {
        Expect(Item).toExist()
    })
})
