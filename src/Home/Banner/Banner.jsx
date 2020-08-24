/** @format */

import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../Banner/image/banner1.jpg";
import img2 from "../Banner/image/banner2.jpg";
import img3 from "../Banner/image/banner3.jpg";

class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={img1}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={img2}
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={img3}
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Banner;
