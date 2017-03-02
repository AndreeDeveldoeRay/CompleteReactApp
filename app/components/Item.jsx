/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T01:05:05+01:00
* @Email:  me@andreeray.se
* @Filename: Item.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-02T16:08:17+01:00
*/


var React = require('react'), moment = require('moment')

var Item = React.createClass
({
    render: function ()
    {
        var {id,text,completed,createdAt,completedAt} = this.props
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
            return message + moment.unix(timestamp).format('MMM Do YYYY @ hh:mm')
        }
        return (
        <div onClick={ () => { this.props.handleToggle(id) }}>
            <input type="checkbox" checked={completed} />
            <p>{text}</p>
            <p>{renderDate()}</p>
        </div>)
    }
})
module.exports = Item
