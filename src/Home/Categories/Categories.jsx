/** @format */

import React, { Component } from "react";
import OneCategorie from "./OneCategorie";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Categories/Categories.css";
import {data} from './Data.js'

class Categories extends Component {
  state = {
    categories:data
  };
  render() {
    const{categories} = this.state;
    return (
      <div className='categories text-center'>
          <h2 className="title">Categories</h2>
        <div className='container'>
          <div className='row'>
            {
              categories.map(categorie =>{
                return (
                  <OneCategorie key={categorie.id} categorie = {categorie}/>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
