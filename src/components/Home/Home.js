import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

class Home extends Component {
  render () {
    return (
      <div className='welcome_page'>
        <div className='greetings'>
          <h1>Regional Income Level Study for Investment </h1>
          <h3>Must see places</h3>
        </div>
        <div className='container'>
          <Link to='/country'>
            <div className='clickbox'>
                  <div className='homeimage'>
                           <img src='http://bestanimations.com/Earth&Space/Earth/earth-spinning-rotating-animation-21-2.gif' />
                         </div>
                </div>
          </Link>
          <ul>
            <li>Arab World</li>
            <li>Europe & Central Asia</li>
            <li>Middle East & North Africa</li>
            <li>Sub-Saharan Africa</li>
            <li>North America</li>
            <li>Latin America & Caribbean</li>
            <li>East Asia & Pacific</li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Home
