/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T01:05:05+01:00
* @Email:  me@andreeray.se
* @Filename: Item.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-01T03:55:11+01:00
*/


var React = require('react')

var Item = React.createClass
({
    render: function ()
    {
        var {id,text,completed} = this.props
        return (
        <div onClick={ () => { this.props.handleToggle(id) }}>
            <input type="checkbox" checked={completed} />
            {text}
        </div>)
    }
})
module.exports = Item
