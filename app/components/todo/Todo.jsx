/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T00:33:36+01:00
* @Email:  me@andreeray.se
* @Filename: TodoApp.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-10T03:08:57+01:00
*/

import React from 'react'
import * as Redux from 'react-redux'

import List from 'List'
import AddItem from 'AddItem'
import Search from 'Search'
import * as actions from 'actions'

export var Todo = React.createClass({

    onLogout(e) {
        var {dispatch} = this.props
        e.preventDefault()
        dispatch(actions.startLogout())
    },

    render () {
        return (<div>
            <div className="row">
                <div className="column small-centered small-11 medium-6 large-5">
                    <a href="#" onClick={this.onLogout}>logout</a>
                    <h1 className="page-title">Todo App</h1>
                    <Search/>
                    <List/>
                    <AddItem/>
                </div>
            </div>
        </div>)
    }
})
export default Redux.connect()(Todo)
