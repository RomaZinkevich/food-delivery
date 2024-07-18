import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import "../Styles/Navbar.css";
import food from "../images/food.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img src={food} alt="logo" />
      <ul>
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("Contactus")}
          className={menu === "Contactus" ? "active" : ""}
        >
          Contact us
        </li>
      </ul>
      <div className="navbarRight">
        <div
          className="icon1"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <FaShoppingCart />
          <div className="dot"></div>
        </div>
        <div className="icon2">
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
