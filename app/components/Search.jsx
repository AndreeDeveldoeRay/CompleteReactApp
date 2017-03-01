/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-03-01T01:35:17+01:00
* @Email:  me@andreeray.se
* @Filename: search.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-01T04:58:06+01:00
*/



var React = require('react')

var Search = React.createClass(
{
    onSearch: function ()
    {
        var search  = this.refs.textSearch.value
        var show    = this.refs.checkboxShow.checked
        this.props.handleSearch(show,search)
    },
    render: function ()
    {
        return (
            <div>
                <input type="text" ref="textSearch" placeholder="search" onChange={this.onSearch}/>
                <input type="checkbox" ref="checkboxShow" onChange={this.onSearch}/>show completed items
            </div>
        )
    }
})

module.exports = Search
