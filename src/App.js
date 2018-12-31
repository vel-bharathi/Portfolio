import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="background">
          <div className="cloud"></div>
          <div className="moon">
            
          </div>
          {/* <div className="star star1-animation"></div>
          <div className="star star2-animation"></div>
          <div className="star star3-animation"></div> */}
        </div>
        <div className="main-content">
          <span className="intro">Hi hi, I'm <span>Velbharathi❤️</span>.<span className="blinking-cursor">_</span></span>
          </div>
      </div>
    );
  }
}

export default App;
