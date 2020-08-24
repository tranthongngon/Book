/** @format */

import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class OneBanner extends Component {
  render() {
    return (
      <Carousel.Item>
        <img className='img-fluid' src={this.props.img} alt="aaa" />
        <Carousel.Caption>
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export default OneBanner;
