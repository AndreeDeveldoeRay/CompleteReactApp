/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-02-28T00:22:35+01:00
* @Email:  me@andreeray.se
* @Filename: entry.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-08T09:14:51+01:00
*/

var React = require('react'), ReactDOM = require('react-dom'), {Route,Router,IndexRoute,hashHistory} = require('react-router'), {Provider} = require('react-redux'), Todo = require('Todo'), action = require('actions'), store = require('store').store()

store.subscribe(() => {
    console.log('New state', store.getState())
})

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation()

//app css
require('style!css!sass!styles')

ReactDOM.render(
    <Provider store={store}>
        <Todo/>
    </Provider>,
    document.getElementById('app')
)
