/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T01:05:05+01:00
* @Email:  me@andreeray.se
* @Filename: Item.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-20T00:43:01+02:00
*/


var React = require('react'),
    moment = require('moment'),
    {connect} = require('react-redux'),
    actions = require('actions')

export var Item = React.createClass({
    render: function ()
    {
        var

        {id, text, completed, createdAt, completedAt, dispatch} = this.props,
        todoClassName = completed ? 'todo todo-completed' : 'todo',

        renderDate = () => {
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
            <div className={todoClassName} onClick={ () => { dispatch(actions.startToggleTodo(id, !completed)) }}>
                <input type="checkbox" checked={completed} onChange={()=>{}} />
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        )
    }
})

export default connect()(Item)
