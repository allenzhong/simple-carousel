import React, {Component} from 'react';
import "./Carousel.css";

export default class CarouselIndicator extends Component {


  render() {
    return (
      <div className="carousel--indicators">
      {
        [...Array(this.props.count)].map((_, i) => {
            return (
              <button className={this.props.style(i)} 
                      key={i}
                      data-index={i}
                      onClick={this.props.handleClick}>
                &#9724;
              </button>
            )
          }
        )
      }
      </div>
    );
  }
}
