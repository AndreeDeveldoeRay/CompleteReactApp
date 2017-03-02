/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T01:03:37+01:00
* @Email:  me@andreeray.se
* @Filename: List.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-03-02T18:57:22+01:00
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
            if (todos.length === 0) return <p className="contain__message">Nothing to do</p>
            return todos.map((item) =>
            {
                return (
                    <Item key={item.id} {...item} handleToggle={this.props.handleToggle}/>
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
