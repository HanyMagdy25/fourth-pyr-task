import React from "react";
import { favourteProducts } from "../../utils/data";
import {BsArrowRight} from "react-icons/bs"
import Card from "../Card/Card";
import "./FavouriteCards.css";
function FavouriteCards() {
  return (
    <div className="FavouriteCards">
      <div className="container">
        <div className="FavouriteCards__title">
          <h2>Favorite Fruits</h2>
          <div className="flex-center">More <span className="flex-center FavouriteCards__arrow"> <BsArrowRight/></span></div>
        </div>
        <hr/>
        <div className="FavouriteCards__cards">
          {favourteProducts.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavouriteCards;
