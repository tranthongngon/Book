/** @format */

import React, { Component } from "react";
import OneAuthor from "./OneAuthor";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "../Author/OneAuthor.css";
import {data} from '../Author/Data.js'

class Authors extends Component {
  state = {
    authors:data
  }
  render() {
    const {authors} = this.state;
    return (
      <div className="bg">
        <Container>
          <div className='title-author'>
            <strong>Famous Authors</strong>
          </div>
          <Row className='size'>
            {
              authors.map(author =>{
                return(
                  <OneAuthor key ={author.id} author ={author}/>
                )
              })
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Authors;
