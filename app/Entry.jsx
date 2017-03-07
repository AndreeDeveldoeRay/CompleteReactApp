/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-02-28T00:22:35+01:00
* @Email:  me@andreeray.se
* @Filename: entry.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-07T02:16:12+01:00
*/



var React = require('react'), ReactDOM = require('react-dom'), {Route,Router,IndexRoute,hashHistory} = require('react-router'),
    Todo = require('Todo')

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation()

//app css
require('style!css!sass!styles')

ReactDOM.render(
    <Todo/>,
    document.getElementById('app')
)
