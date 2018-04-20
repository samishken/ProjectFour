import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './Home.css'

class Home extends Component {
  constructor (props) {
    super(props)
  }


  render () {
    return (
      <div className='welcome_page'>
        <div className='greetings'>
          <h1>Regional Income Level Study for Investment </h1>

          <h3>Evaluating Regional Risk For International Investing</h3>
        </div>
        <div className='container'>
          <Link to='/country'>
            <div className='clickbox'>
              <div className='homeimage'>
                    <img src='http://bestanimations.com/Earth&Space/Earth/earth-spinning-rotating-animation-21-2.gif' />
                  </div>
            </div>
          </Link>
          <h3>Pick A Region</h3>
          <div class='link'>
            <ul>
              <li><Link to='/chart' id='link'> Middle East & North Africa</Link></li>
              <li><Link to='/chart' id='link'> East Asia & Pacific</Link></li>
              <li><Link to='/chart' id='link'> Europe & Central Asia</Link></li>
              <li><Link to='/chart' id='link'> Latin America & Caribbean</Link></li>
              <li><Link to='/chart' id='link'> North America</Link></li>
              <li><Link to='/chart' id='link'> Sub-Saharan Africa</Link></li>
            </ul>
          </div>
          

        </div>
      </div>
    )
  }
}
export default Home
