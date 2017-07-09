import React, {Component} from 'react';
import "./Carousel.css";

export default class CarouselIndicator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = {fontSize: this.props.buttonSize || '1em' };
    return (
      <div className={`carousel--indicators ${this.props.position}` }>
      {
        [...Array(this.props.count)].map((_, i) => {
            return (
              <button className={this.props.style(i)} 
                      key={i}
                      data-index={i}
                      onClick={this.props.handleClick}>
                <span style={style} >{this.props.buttonShape}</span>
              </button>
            )
          }
        )
      }
      </div>
    );
  }
}
