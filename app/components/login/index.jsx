/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-05-15T13:59:27+02:00
 * @Email:  me@andreeray.se
 * @Filename: index.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-05-15T14:32:09+02:00
 */


import React from 'react'
import * as Redux from 'react-redux'
import * as actions from 'actions'


export var Login = React.createClass({

    onLogin() {
        var {dispatch} = this.props
        dispatch(actions.startLogin())
    },

    render() {
        return (
            <div className="row">
                <div className="columns small-centered small-10 medium-6 large-4">
                    <div className="callout">
                        <button className="button" onClick={this.onLogin}>login with github</button>
                    </div>
                </div>
            </div>
        )
    }
})

export default Redux.connect()(Login)
