import React, { Component } from 'react'
import { Link, Switch, Route, Redirect, browserHistory } from 'react-router-dom' 

class Navbar extends Component {
    render() {
        return (
            <nav>
                  <Link to='/home' id='navbar'> Main Page</Link>
            </nav>
        )
    }
}

export default Navbar;
