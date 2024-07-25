import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import "../Styles/Navbar.css";
import food from "../images/food.png";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [user, setUser] = useState(true);
  const navigate = useNavigate();
  return (
    <div>
      {user ? (
        <div className="navbar">
          <img src={food} alt="logo" />
          <ul>
            <Link
              to=""
              onClick={() => setMenu("Home")}
              className={menu === "Home" ? "active" : ""}
            >
              Home
            </Link>
            <a
              href="#exploreMenu"
              onClick={() => setMenu("Menu")}
              className={menu === "Menu" ? "active" : ""}
            >
              Menu
            </a>
            <a
              href="#"
              onClick={() => setMenu("Contactus")}
              className={menu === "Contactus" ? "active" : ""}
            >
              Contact us
            </a>
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
      ) : (
        <div className="navbar">
          <img src={food} alt="logo" />
          <div className="buttons">
            <button className="loginButton">Login</button>
            <button className="signupButton">Sign up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
