/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-02-28T00:22:35+01:00
* @Email:  me@andreeray.se
* @Filename: entry.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-10T03:51:09+01:00
*/

var React = require('react'),
ReactDOM = require('react-dom'),
{Route,Router,IndexRoute,hashHistory} = require('react-router'),
{Provider} = require('react-redux'),
Todo = require('Todo'),
actions = require('actions'),
store = require('store').store(),
TodoAPI = require('TodoAPI')

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos()
store.dispatch(actions.addTodos(initialTodos))

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
