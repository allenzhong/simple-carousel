import React, {Component} from 'react';
import "./Carousel.css";

export default class CarouselIndicator extends Component {
  constructor(props){
    super(props);
    let {currentIndex, count} = props;
    this.state = {
      currentIndex: currentIndex,
      count: count
    }
  }

  render() {
    return (
      <div className="carousel--indicators">
      {
        [...Array(this.state.count)].map((_, i) => {
            let className;
            if (this.state.currentIndex == i) {
              className += "carousel--indicators_button active";
            } else {
              className = "carousel--indicators_button";
            }
            return (<button className={className} key={i}>&#9632;</button>)
          }
        )
      }
      </div>
    );
  }
}
