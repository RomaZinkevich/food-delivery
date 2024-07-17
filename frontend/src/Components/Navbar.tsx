import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import "../Styles/Navbar.css";
import food from "../images/food.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={food} alt="logo" />
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact us</li>
      </ul>
      <div className="iconContainer">
        <div className="icons">
          <FaShoppingCart />
        </div>
        <div className="icons">
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
