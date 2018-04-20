import React, { Component } from 'react'
import { Link, Switch, Route, Redirect, browserHistory } from 'react-router-dom' 
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav>
                  <Link to='/home' className='navbar'> Main Page</Link>
                  <Link to='/about' className='navbar'> About</Link>
                </nav>
            </div>
        )
    }
}

export default Navbar;
