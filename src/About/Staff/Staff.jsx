/** @format */

import React, { Component } from "react";
import "../Staff/Staff.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";

class Staff extends Component {
  render() {
      const {img, name, position}= this.props.staff
    return (
      <Col md={6} lg={3} sm={12} xs={12}>
        <div className='gird-staff'>
          <div className='img-staff'>
            <img src={img} alt='' className='fluid' />
          </div>
          <div className='content-staff'>
            <h3>{name}</h3>
            <h4>{position}</h4>
            <div className='social-staff'>
              <a href='https://www.google.com/'>
                <i className='fa fa-facebook' aria-hidden='true'></i>
              </a>
              <a href='https://www.google.com/'>
                <i className='fa fa-instagram' aria-hidden='true'></i>
              </a>
              <a href='https://www.google.com/'>
                <i className='fa fa-twitter' aria-hidden='true'></i>
              </a>
              <a href='https://www.google.com/'>
                <i className='fas fa-mail-bulk'></i>
              </a>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default Staff;
