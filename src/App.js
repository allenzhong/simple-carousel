import React, { Component } from 'react';
import './App.css';
import Carousel, {Position} from './components/Carousel';

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
            <Carousel images={images} 
              indicatorPosition={Position.RIGHT} 
              interval={8000}
              buttonSize={'1.1em'}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
