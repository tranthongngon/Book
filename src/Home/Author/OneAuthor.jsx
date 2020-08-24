/** @format */

import React, { Component } from "react";
import "../Author/OneAuthor.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import { Animated } from "react-animated-css";

class OneAuthor extends Component {
  render() {
    const { img, name, realname, year, century, type } = this.props.author;
    return (
      <Col md={4} lg={4} sm={12} xs={12}>
        <Animated animationIn="bounceInLeft">
          <div
            className='one-author'
            style={{ backgroundImage: `url(${img})` }}>
            <div className='info-author'>
              <h2> {name} </h2>
              <p>
                <strong>Real Name:</strong> {realname}
              </p>
              <p>
                <strong>Year of birth/death:</strong>
                {year}
              </p>
              <p>
                <strong>Age:</strong> {century}
              </p>
              <p>
                <strong>Type:</strong> {type}
              </p>
            </div>
            <div
              className='bg-author'
              style={{ backgroundImage: `url(${img})` }}></div>
          </div>
        </Animated>
      </Col>
    );
  }
}

export default OneAuthor;
