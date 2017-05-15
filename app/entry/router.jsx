/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-05-15T14:01:48+02:00
 * @Email:  me@andreeray.se
 * @Filename: index.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-05-15T14:28:42+02:00
 */



import React from 'react'


var Router = React.createClass({
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
})
module.exports = Router
