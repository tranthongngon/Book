/** @format */

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Footer/Footer.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

class Footer extends Component {
  constructor(props) {
      super(props)
    this.state = {
      currentDateTime: Date().toLocaleString(),
    };
  }
  render() {
    return (
      <div className='footer'>
        <Container>
          <Row>
            <Col md={4} lg={4} sm={12} xs={12}>
              <div className='footer-info'>
                <h2>Book-Store</h2>
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                  illo, perferendis nobis facilis asperiores voluptate
                  cupiditate quam autem consequuntur. Voluptate?
                </span>
              </div>
            </Col>
            <Col md={5} lg={5} sm={12} xs={12}>
              <div className='footer-contact'>
                <h2>Contact</h2>
                <p>
                  <i className='fa fa-map-marker' aria-hidden='true'></i>Dormitory A
                  - Ward Linh Trung - District Thử Đức - City TP.HCM
                </p>
                <p>
                  <i className='fa fa-phone' aria-hidden='true'></i>+84 388 711 977
                </p>
                <p>
                  <i className='fa fa-envelope-o'></i>bookstore@gmail.com
                </p>
              </div>
            </Col>
            <Col md={3} lg={3} sm={12} xs={12}>
              <div className='footer-social'>
                <h2>Social</h2>
                <span>
                  <a href='https://www.youtube.com/' target='_blank'rel="noopener noreferrer">
                    <i className='fa fa-facebook' aria-hidden='true'></i>
                  </a>
                  Facebook
                </span>
                <span>
                  <a href='https://www.youtube.com/' target='_blank'rel="noopener noreferrer">
                    <i className='fa fa-instagram' aria-hidden='true'></i>
                  </a>
                  Instagram
                </span>
                <span>
                  <a href='https://www.youtube.com/' target='_blank'rel="noopener noreferrer">
                    <i className='fa fa-twitter' aria-hidden='true'></i>
                  </a>
                  Twitter
                </span>
                <span>
                  <a href='https://www.youtube.com/' target='_blank' rel="noopener noreferrer">
                    <i className='fa fa-pinterest' aria-hidden='true'></i>
                  </a>
                  Pinterest
                </span>
              </div>
            </Col>
          </Row>
          <Col md={12} lg={12} sm={12} xs={12}>Welcome Foodfun {this.state.currentDateTime} Choose the food you like <i className='fa fa-heart-o'></i> by {" "}
            <a href='https://www.youtube.com/' target='_blank'rel="noopener noreferrer">
              Book-Store
            </a>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Footer;
