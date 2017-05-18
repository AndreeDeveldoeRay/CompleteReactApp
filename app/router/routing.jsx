/**
 * @Author: Andree Ray <DevelDoe>
 * @Date:   2017-05-15T14:28:34+02:00
 * @Email:  info@andreeray.se
 * @Filename: middleware.jsx
 * @Last modified by:   DevelDoe
 * @Last modified time: 2017-05-18T14:47:34+02:00
 */

import React from 'react'


export var Router = React.createClass({
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
})
