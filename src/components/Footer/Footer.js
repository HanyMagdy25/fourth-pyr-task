import React from "react";
import "./Footer.css";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__top">
          <h2>Subscribe to newsletter</h2>
          <form>
            <input type="text" placeholder="join" />
            <button>subscribe</button>
          </form>
          <div className="footer__icons">
            <p>Social Media</p>
            <div className="flex">
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
        <div className="footer__bottom flex">
          <div className="footer__logo">
            <span className="footer__logo-food">Food</span>
            <span className="footer__logo-empire">Empire</span>
          </div>
          <div className="footer__bottom__links">
            <Link to="/">Best Fruits</Link>
            <Link to="/">Social Media</Link>
            <Link to="/">More for You</Link>
            <Link to="/">YourShoop</Link>
            <Link to="/">The Copyright 2022 guide covers 14 jurisdictions.</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
