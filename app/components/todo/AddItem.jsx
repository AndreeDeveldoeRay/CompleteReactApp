/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-28T02:08:46+01:00
* @Email:  me@andreeray.se
* @Filename: AddItem.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-28T12:43:16+02:00
*/



var React = require('react'),
    {connect} = require('react-redux'),
    actions = require('actions')

export var AddItem = React.createClass
({
    onSubmit: function (e)
    {
        e.preventDefault()
        var {dispatch} = this.props
        var text = this.refs.text.value
        if(text.length > 0) {
            this.refs.text.value = ''
            dispatch(actions.startAddTodo(text))
        }
        else {
            this.refs.text.focus()
        }

    },
    render: function ()
    {
        return (
        <div>
            <form onSubmit={this.onSubmit}>
                <input type="text" ref="text" placeholder="What you need to do"/>
                <button className="button expanded">ADD</button>
            </form>
        </div>)
    }
})
export default connect()(AddItem)
