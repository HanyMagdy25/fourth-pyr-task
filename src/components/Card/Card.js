import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsDash } from "react-icons/bs";
import "./Card.css";
function Card({ item }) {
  const [count, setcount] = useState(1);
  return (
    <div className="card">
      <img src={item.image} alt={item.title} />
      <div className="card__details">
        <h3 className="card__details__title">{item.title}</h3>
        <p className="card__details__description">{item.description}</p>
        <div className="card__details__price">
          <span className="card__details__new-price">{item.price}$</span>
          <span className="card__details__old-price">{item.oldPrice}$</span>
        </div>
        <div className="card__details__btns">
          <div className="card__details__btns-count">
            <button className="flex-center" onClick={() => setcount(count + 1)}>
              <AiOutlinePlus />
            </button>
            <span className="flex-center">{count}</span>
            <button className="flex-center" onClick={() => setcount(count - 1)}>
              <BsDash />
            </button>
          </div>
          <button className="card__details__btns-buy">BUY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
