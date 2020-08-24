/** @format */

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Contact/Contact.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Footer from "../Home/Footer/Footer";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: '',
      message: '',
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.fullname === '' ||
      this.state.email === '' ||
      this.state.message === ''
    ) {
      alert("you must enter all fields");
    } else {
      console.log(this.state);
      axios
        .post("http://localhost:3333/create", this.state)
        .then((response) => {
          console.log(response);
          alert('you have sent a message')
        })
        .then(
          this.setState({fullname:''}),
          this.setState({email:''}),
          this.setState({message:''})
        )
        .catch((error) => {
          console.log(error);
        });
    }
  };
  render() {
    const { fullname, email, message } = this.state;
    return (
      <div>
        <Container fluid className='contact'>
          <Row>
            <Col md={12} lg={12} sm={12} xs={12}>
              <div className='contact-banner text-center'>
                <h2>Contact-US</h2>
                <h2>Contact-US</h2>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className='message-map'>
          <Row>
            <Col lg={6} md={6} xs={12} sm={12} className='google-map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.128220679225!2d106.80504081411719!3d10.877851060289524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a5f4e477e9%3A0x29d5aeb365cee20b!2sKTX%20Khu%20A%20%C4%90HQG%20TP.HCM!5e0!3m2!1svi!2s!4v1597303868712!5m2!1svi!2s'
                className='map'></iframe>
            </Col>
            <Col lg={6} md={6} xs={12} sm={12} className='big-form'>
              <div className='form'>
                <h3>Contact Us</h3>
                <form onSubmit={this.handleSubmit}>
                  <label>Full Name</label>
                  <br />
                  <input
                    type='text'
                    name='fullname'
                    value={fullname}
                    onChange={this.handleChange}
                  />
                  <br />
                  <label>Email</label>
                  <br />
                  <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                  />
                  <br />
                  <label>Message</label>
                  <br />
                  <textarea
                    id=''
                    name='message'
                    value={message}
                    onChange={this.handleChange}></textarea>
                  <br />
                  <button type='submit'>Send</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Contact;
