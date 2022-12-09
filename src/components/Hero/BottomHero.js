import React from "react";
import { heroData } from "../../utils/data";
import { GoPrimitiveDot } from "react-icons/go";
import "./BottomHero.css";
function BottomHero() {
  return (
    <div className="bottomHero">
      <div className="container bottomHero__container">
        {heroData.map((item, index) => (
          <div key={index} className="bottomHero__card">
            <img src={item.image} alt={item.title} />
            <div className="bottomHero__card__details">
              <div className="bottomHero__card__details-left">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p className="bottomHero__card__details-p">
                  Amet minim mollit non deserunt
                </p>
              </div>
              <div className="bottomHero__card__details-right">
                <div className="bottomHero__card__price">
                  <span className="bottomHero__card__new-price">
                    {item.price}$
                  </span>
                  <span className="bottomHero__card__old-price">
                    {item.oldPrice}$
                  </span>
                </div>
                <button className="bottomHero__card__details-btn">
                  BUY NOW
                </button>
              </div>
              <div className="bottomHero__card__details-pagenation">
                {[
                  ...Array(3).map((x, i) => (
                    <span key={i}>
                      <GoPrimitiveDot />
                    </span>
                  )),
                ]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottomHero;
