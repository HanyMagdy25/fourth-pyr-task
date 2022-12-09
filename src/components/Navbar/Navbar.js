import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navTitle } from "../../utils/data";
import "./Navbar.css";
// Import Icons
// import { IoIosArrowDown } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsBagDash } from "react-icons/bs";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar"> 
        <div className="navbar-container">
          <div className="navbar__logo">
            <span className="navbar__logo-food">Food</span>
            <span className="navbar__logo-empire">Empire</span>
          </div>

          <div className="menu-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
            <span>{click ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
          </div>

          <ul className={click ? "nav-menu active " : "nav-menu"}>
            {navTitle.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.path}
                  className={"nav-links "}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <span className="navbar__icon flex-center">
              <IoLogOutOutline />
            </span>
            <span className="navbar__icon flex-center">
              <BsBagDash />
              <span></span>
            </span>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
