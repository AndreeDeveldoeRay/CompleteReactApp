/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T01:05:05+01:00
* @Email:  me@andreeray.se
* @Filename: Item.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-28T01:24:55+01:00
*/



/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T01:03:37+01:00
* @Email:  me@andreeray.se
* @Filename: List.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-28T01:24:55+01:00
*/



var React = require('react')

var Item = React.createClass
({
    render: function ()
    {
        var {id,text} = this.props
        return (
        <div>
            {id} {text}
        </div>)
    }
})
module.exports = Item
