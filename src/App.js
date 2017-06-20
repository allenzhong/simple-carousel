import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';

class App extends Component {
  render() {
    let images = [
      "images/1.jpg",
      "images/2.jpg",
      "images/3.jpg",
      "images/4.jpg",
      "images/5.jpg"
    ]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Carousel images={images} />
        </div>
      </div>
    );
  }
}

export default App;
