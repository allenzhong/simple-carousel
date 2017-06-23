import React, {Component} from 'react';
import "./Carousel.css";

export default class CarouselIndicator extends Component {

  constructor(props) {
    super(props);
    this.buttonCharacter = this.buttonCharacter.bind(this);
  }

  buttonCharacter() {
    return this.props.buttonCharacter ? this.props.buttonCharacter : '\u25a0';
  }

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
                {this.buttonCharacter()}
              </button>
            )
          }
        )
      }
      </div>
    );
  }
}
