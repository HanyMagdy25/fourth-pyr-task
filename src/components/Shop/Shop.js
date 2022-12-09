import React from "react";
import { allProducts } from "../../utils/data";
import {BsArrowRight} from "react-icons/bs"
import Card from "../Card/Card";

function Shop() {
  return (
    <div className="FavouriteCards">
      <div className="container">
        <div className="FavouriteCards__title">
          <h2>Fruit Shop</h2>
          <div className="flex-center">
            More{" "}
            <span className="flex-center FavouriteCards__arrow">
              {" "}
              <BsArrowRight />
            </span>
          </div>
        </div>
        <hr />
        <div className="FavouriteCards__cards">
          {allProducts.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
