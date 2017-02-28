/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T01:03:37+01:00
* @Email:  me@andreeray.se
* @Filename: List.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-28T01:18:23+01:00
*/



var React = require('react'),
    Item = require('Item')

var List = React.createClass
({
    render: function ()
    {
        var {todos} = this.props
        var renderItems = () =>
        {
            return todos.map((item) =>
            {
                return (
                    <Item key={item.id} {...item}/>
                )
            })
        }
        return (
        <div>
            {renderItems()}
        </div>)
    }
})
module.exports = List
