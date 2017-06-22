import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import CarouselIndicator from "./CarouselIndicator";
import "./Carousel.css";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    // let { images } = props;
    this.state = {
      currentIndex: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.getStyle = this.getStyle.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      ()=>{
        console.log(this.state.currentIndex);
        this.setState({currentIndex: (this.state.currentIndex + 1) % this.props.images.length});
      }, 20000
    );  
  }

  componentWillUnmount() {
    this.timerID && clearInterval(this.timerID);  
  }

  handleClick(e) {
    this.setState({currentIndex: e.target.dataset.index});
    // e.target.addClass("active");
  }

  getStyle(i) {
    console.log(`${this.state.currentIndex} === ${i}`);
    return this.state.currentIndex == i ? "carousel--indicators_button active" : "carousel--indicators_button";
  }

  render() {
    return (
      <div>
        <ul className="carousel">
          <CSSTransitionGroup
            transitionName="carousel"
            component="li"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <img src={this.props.images[this.state.currentIndex]}
                 key={this.props.images[this.state.currentIndex]}
                 alt = ""
            />
          </CSSTransitionGroup>
        </ul>
      <CarouselIndicator style={this.getStyle} currentIndex={this.state.currentIndex} count={this.props.images.length} handleClick={this.handleClick}/>
      </div>
    );
  }
} 

Carousel.propTypes = {
  images: PropTypes.array.isRequired
}
