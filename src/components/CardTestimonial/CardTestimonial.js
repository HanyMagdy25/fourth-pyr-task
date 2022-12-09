import React from "react";
import "./CardTestimonial.css";
import { AiFillStar } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
function CardTestimonial({ item }) {
  return (
    <div className="cardTestimonial">
      <div className="cardTestimonial__img">
        <img src={item.image} alt={item.name} />
        <div>
          {[...Array(5)].map((x, i) => (
            <span key={i}>
              <AiFillStar />
            </span>
          ))}
        </div>
      </div>
      <div className="cardTestimonial__datails">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <div className="cardTestimonial__lights">
      {[...Array(8)].map((x, i) => (
            <span key={i} className="flex-center">
              <BsCircleFill/>
            </span>
          ))}
      </div>
    </div>
  );
}

export default CardTestimonial;
