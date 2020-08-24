/** @format */

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Card/Onecard.css";

class OneCard extends Component {
  render() {
    return (
        <div className='card'>
          <div className='imgBx' data-text={this.props.before}>
            <img src={this.props.img} alt='book' />
          </div>
          <div className='content'>
            <div>
              <h3 className='title'>{this.props.title}</h3>
              <p className='text'>{this.props.text}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default OneCard;
