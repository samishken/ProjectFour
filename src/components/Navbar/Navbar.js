import React, { Component } from 'react'
import { Link, Switch, Route, Redirect, browserHistory } from 'react-router-dom' 

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav>
                  <Link to='/home' id='navbar'> Main Page</Link>
                  <Link to='/about' id='navbar'> About</Link>
                </nav>
            </div>
        )
    }
}

export default Navbar;
