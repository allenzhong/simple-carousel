import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import CarouselIndicator from "./CarouselIndicator";
import "./Carousel.css";

export const Position = {
  CENTER: 'carousel--indicators__centered',
  LEFT: 'carousel--indicators__left',
  RIGHT: 'carousel--indicators__right'
}

export const Shapes = {
  SMALL_SQUARE: '\u25a0',
  FISHEYE: '\u25c9',
  CIRCEL: '\u25cf'
}

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }

    this.handleClick = this.handleClick.bind(this);
    this.buttonStyle = this.buttonStyle.bind(this);
    this.getInterval = this.getInterval.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.cleanTimer = this.cleanTimer.bind(this);
    this.buttonShape = this.buttonShape.bind(this);
  }

  getInterval() {
    return this.props.interval ? this.props.interval : 5000;
  }

  componentDidMount() {
    this.resetTimer();  
  }

  componentWillUnmount() {
    this.cleanTimer();
  }

  resetTimer() {
    this.timerID = setInterval(
      ()=>{
        console.log(this.state.currentIndex);
        this.setState({currentIndex: this.state.currentIndex+1 % this.props.images.length});
      }, this.getInterval()
    ); 
  }

  cleanTimer() {
    this.timerID && clearInterval(this.timerID);
  }

  handleClick(e) {
    this.setState({currentIndex: Number(e.target.dataset.index)});
    this.cleanTimer();
    this.resetTimer();
  }

  buttonStyle(i) {
    return Number(this.state.currentIndex) === Number(i) ? "carousel--indicators_button active" : "carousel--indicators_button";
  }

  buttonShape() {
    return this.props.buttonShape ? this.props.buttonShape : Shapes.SMALL_SQUARE;
  }

  render() {
    return (
      <div>
        <ul className="carousel">
          <CSSTransitionGroup
            transitionName="carousel"
            component="li"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
            <img src={this.props.images[this.state.currentIndex]}
                 key={this.props.images[this.state.currentIndex]}
                 alt = ""
            />
          </CSSTransitionGroup>
        </ul>
      <CarouselIndicator position={this.props.indicatorPosition ? this.props.indicatorPosition : Position.CENTER} 
                    style={this.buttonStyle}  
                    currentIndex={this.state.currentIndex} 
                    count={this.props.images.length} 
                    handleClick={this.handleClick}
                    buttonShape={this.buttonShape()}/>
      </div>
    );
  }
} 

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  indicatorPosition: PropTypes.string.isRequired, 
  interval: PropTypes.number.isRequired
}
