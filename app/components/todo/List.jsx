/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T01:03:37+01:00
* @Email:  me@andreeray.se
* @Filename: List.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-08T08:40:02+01:00
*/



var React = require('react'), {connect} = require('react-redux')

import Item from 'Item'

export var List = React.createClass
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
                    <Item key={item.id} {...item} />
                )
            })
        }
        return (
        <div>
            {renderItems()}
        </div>)
    }
})
export default connect(
    (state) => {
        return {
            todos: state.todos
        }
    }
)(List)
