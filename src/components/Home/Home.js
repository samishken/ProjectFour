import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

class Home extends Component {
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
          <div class="button">    
           <li><button id='button0'><span id='choice0'></span>Arab World</button></li>
            <li><button id='button1'><span id='choice1'></span>East Asia & Pacific</button></li>
            <li><button id='button2'><span id='choice2'></span>Europe & Central Asia</button></li>
            <li><button id='button3'><span id='choice3'></span>Latin America & Caribbean</button></li>
            <li><button id='button4'><span id='choice4'></span>Middle East & North Africa</button></li>
            <li><button id='button5'><span id='choice5'></span>North America</button></li>
            <li><button id='button6'><span id='choice6'></span>Sub-Saharan Africa</button></li>
          </div>
          
        </div>
      </div>
    )
  }
}
export default Home
