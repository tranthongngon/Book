/** @format */

import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import '../BannerVideo/BannerVideo.css'
import "video-react/dist/video-react.css";
import { Player } from "video-react";

class BannerVideo extends Component {
  render() {
    return (
      <div className="banner-video">
        <Container fluid>
          <Col xs={12} sm={12} md={12} lg={12}>
          <div className="title"><h1>Featured Books</h1> </div></Col>
          <Row >
            <Col xs={12} sm={12} md={12} lg={6} className="video">
              <Player className="player-video">
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              </Player>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="info">
                <h2>The Old Man and the Sea</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, doloribus voluptatum voluptates commodi distinctio officiis quis et a quidem corporis ipsum repellendus, deleniti aliquam vitae. Necessitatibus accusamus eaque placeat sapiente autem, eveniet libero rem inventore dolor tenetur exercitationem aliquam temporibus!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, impedit. Nobis doloremque mollitia.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BannerVideo;
