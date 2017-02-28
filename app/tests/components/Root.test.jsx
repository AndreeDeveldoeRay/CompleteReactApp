/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T01:30:12+01:00
* @Email:  me@andreeray.se
* @Filename: Root.test.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-28T01:40:36+01:00
*/



var React = require('react'), ReactDOM = require('react-dom'), TestUtils = require('react-addons-test-utils'), Expect = require('expect'), Root = require('Root')

describe('Root', () =>
{
    it('exists', () =>
    {
        Expect(Root).toExist()
    })
})
