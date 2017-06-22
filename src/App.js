import React, { Component } from 'react';
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
        <div className="App-intro">
          <div className="container">
            <Carousel images={images} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;