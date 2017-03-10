/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-01T01:35:17+01:00
* @Email:  me@andreeray.se
* @Filename: Search.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-10T02:43:48+01:00
*/

var React = require('react')
var {connect} = require('react-redux')
var actions = require('actions')

// we need to export this here as a function so that we can test it.
export var Search = React.createClass({

    render: function () {
        var {dispatch, showCompleted, searchString} = this.props
        return (<div>
            <input type="text" ref="searchString" placeholder="search" value={searchString} onChange={() => {
                    var searchString = this.refs.searchString.value
                    dispatch(actions.setSearchString(searchString))
                }}/>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                    dispatch(actions.toggleShowCompleted())
                }}/>show completed items
        </div>)
    }
})

export default connect(
    // tell redux witch values we want to grab
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchString: state.searchString
        }
    }
)(Search)
