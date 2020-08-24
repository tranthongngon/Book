/** @format */

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Card/Onecard.css";
import OneCard from "./OneCard";
import img1 from "../Card/image/book.png";
import img2 from "../Card/image/customer.png";
import img3 from "../Card/image/order.png";
import img4 from "../Card/image/support.png";
const cards = [
  {
    img: img1,
    before: "Books",
    title: "Books",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi corrupti nihil illum magni sequi rerum ipsam corporis at nobis beatae.",
  },
  {
    img: img2,
    before: "Customer",
    title: "Customer",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi corrupti nihil illum magni sequi rerum ipsam corporis at nobis beatae.",
  },
  {
    img: img3,
    before: "Order",
    title: "Order",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi corrupti nihil illum magni sequi rerum ipsam corporis at nobis beatae.",
  },
  {
    img: img4,
    before: "Support",
    title: "Support",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi corrupti nihil illum magni sequi rerum ipsam corporis at nobis beatae.",
  },
];

class Card extends Component {
  render() {
    return (
      <div className='big-card'>
        <div className='container'>
            {cards.map((card, index) => {
              return <OneCard {...card} key={index} />;
            })}
        </div>
      </div>
    );
  }
}

export default Card;
