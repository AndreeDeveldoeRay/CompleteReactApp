/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T01:05:05+01:00
* @Email:  me@andreeray.se
* @Filename: Item.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-03-02T19:49:25+01:00
*/


var React = require('react'), moment = require('moment')

var Item = React.createClass
({
    render: function ()
    {
        var {id,text,completed,createdAt,completedAt} = this.props
        var todoClassName = completed ? 'todo todo-completed' : 'todo'
        var renderDate = () =>
        {
            if(completed)
            {
                message = 'Completed '
                timestamp = completedAt
            }
            else
            {
                var message = 'Created '
                var timestamp = createdAt
            }
            return message + moment.unix(timestamp).format('MMMM Do YYYY HH:mm')
        }
        return (
        <div className={todoClassName} onClick={ () => { this.props.handleToggle(id) }}>
            <input type="checkbox" checked={completed} />
            <p>{text}</p>
            <p>{renderDate()}</p>
        </div>)
    }
})
module.exports = Item
