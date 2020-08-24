/** @format */

import React, { Component } from "react";
import "../Categories/Categories.css";

class OneCategorie extends Component {
  render() {
    const {img, type, title, price} = this.props.categorie;
    return (
        <div className='col-xs-6 col-sm-6 col-md-3 cover'>
          <div className='one-categorie'>
            <div className='img-book'>
              <img src={img} alt={type} className-="img-fluid"/>
            </div>
            <div className='content'>
              <div className='info'>
                <h3> {title} </h3>
                <span> {price} </span>
              </div>
              <button className='btn btn-warning'>Buy now</button>
            </div>
          </div>
        </div>
    );
  }
}

export default OneCategorie;
