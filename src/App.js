import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'
import { Link, Switch, Route, Redirect } from 'react-router-dom' 
import About from './components/About/About'
import './App.css';
import Home from './components/Home/Home'
import Marker from './components/Marker/Marker'
import Country from './components/Country/Country'
import Chart from './components/Chart/Chart';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      countries: [],
      selectedCountry: null,
      search: ''
    }
  }
  
  handleSearch = (event) => {
    // this.setState({
    //   search: event.target.value,
    //   countries: this.state.allCountries.filter((country) => new RegExp(event.target.value, "i").exec(country.name))
    // })
  }
  render() {
    let center = {
      lat: 5, lng: 5
    }

    if(this.state.selectedCountry) {
      center = { lat: this.state.selectedCountry.lat, lng: this.state.selectedCountry.lng }
    }

    return (
      <div className='app'>
        <div className='main'>
            <div className="search"> 
              <input type="text" placeholder="Search..." value={this.state.search}
              onChange={this.handleSearch} />
            </div>

           <Switch>
              <Route path='/home' render={() => <Home />} />
              <Route path='/chart' render={() => <Chart location="Middle East & North Africa" legendPosition="bottom"/>} />  
              <Route exact path='/about' render={() => <About />} />  
           </Switch>   
        </div>
      
        <div className='map'>
               <GoogleMapReact
                 center={center}
                 // getting map closer to center increase the below number in ZOOM
                 zoom={1}>
                   {this.state.countries.map((country) => { return <Marker
                     key={country.name} lat={country.lat}
                     lng={country.lng} text={country.desc}
                     selected={country === this.state.selectedCountry}    
                     />
                   })}
               </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
