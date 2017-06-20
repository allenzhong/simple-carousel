import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import "./Carousel.css";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    // let { images } = props;
    this.state = {
      currentIndex: 0
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      ()=>{
        console.log(this.state.currentIndex);
        this.setState({currentIndex: (this.state.currentIndex + 1) % this.props.images.length});
      }, 3000
    );  
  }

  componentWillUnmount() {
    this.timerID && clearInterval(this.timerID);  
  }

  render() {
    return (
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
    );
  }
} 

Carousel.propTypes = {
  images: PropTypes.array.isRequired
}
