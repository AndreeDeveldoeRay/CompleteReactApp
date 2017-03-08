/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-28T02:08:46+01:00
* @Email:  me@andreeray.se
* @Filename: AddItem.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-02-28T03:12:27+01:00
*/



var React = require('react')

var Input = React.createClass
({
    onSubmit: function (e)
    {
        e.preventDefault()
        var text = this.refs.text.value
        if(text.length > 0)
        {
            this.refs.text.value = ''
            this.props.handleAddItem(text)
        }
        else
        {
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
module.exports = Input
