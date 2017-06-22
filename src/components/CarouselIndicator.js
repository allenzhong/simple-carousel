import React, {Component} from 'react';
import "./Carousel.css";

export default class CarouselIndicator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="carousel--indicators">
      {
        [...Array(this.props.count)].map((_, i) => {
            return (
              <button className={this.props.currentIndex === i ? "carousel--indicators_button active" : "carousel--indicators_button"} key={i}>
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
