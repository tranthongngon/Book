/** @format */

import React, { Component } from "react";
import "../About/About.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Footer from "../Home/Footer/Footer";
import Staff from "../About/Staff/Staff";
import { data } from "../About/Staff/Data.js";

class About extends Component {
  state = {
    staffs: data,
  };
  render() {
    const {staffs}=this.state
    return (
      <div style={{ backgroundColor: `#f8f8f8` }}>
        <Container fluid>
          <Row>
            <Col className='banner-about' md={12} lg={12} xs={12} sm={12}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <h1 className='title'>About-US</h1>
            </Col>
          </Row>
        </Container>
        <Container className='staffs'>
          <h2 className='title-staff'>Our Employees</h2>
          <Row className='big-staff'>
            {staffs.map(staff =>{
              return(
                <Staff key={staff.id} staff ={staff}/>
              )
            })}
            </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default About;
