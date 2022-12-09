import React from "react";
import { aboutData } from "../../utils/data";
import CardTestimonial from "../CardTestimonial/CardTestimonial";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about__title">
          <h2>Abouts Us</h2>
          <div className="flex-center">
            <span className="flex-center">
              <BsArrowLeft />
            </span>
            <span className="flex-center FavouriteCards__arrow">
              {" "}
              <BsArrowRight />
            </span>
          </div>
        </div>
        <hr />
        <div className="about__testi">
          {aboutData.map((item, index) => (
            <CardTestimonial key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
