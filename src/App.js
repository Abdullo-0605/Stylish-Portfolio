import React, { Component } from 'react';
import './App.css';
// import Nav from './Navbar/Navbar'
import Start from './components/start/start';
import Offer from './components2/Offers/Offer';
import Service from './components3/Services/Service';
import Welcome from './components4/Welcomes/Welcome';
import Project from './components5/Projects/Project';
import Button from './components6/Buttons/Button';
import Map from './components7/Maps/Map'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Nav/> */}
        <Start/>
        <Offer/>
        <Service/>
        <Welcome/>
        <Project/>
        <Button/>
        <Map/>
      </div>
    );
  }
}

export default App;