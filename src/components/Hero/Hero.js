import React from "react";
import "./Hero.css";
import pngwing from "../../assets/pngwing.png";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
function Hero() {
  return (
    <div className="hero">
      <div className="container hero__container">
        <div className="hero__date">
          <h3>
            <span>01</span>/02
          </h3>
          <h3 className="hero__date-title">Ananas</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <div className="hero__img">
          <img src={pngwing} alt="anans" />
        </div>
        <div className="hero__details">
          <h1>Fruit Delivery</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <span>Fruit Mania</span>
        </div>
        <div className="hero__icons">
          <span className="flex-center">
            <AiFillInstagram />
          </span>
          <span className="flex-center">
            <FaFacebookSquare />
          </span>
          <span className="flex-center">
            <FaTwitterSquare />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
