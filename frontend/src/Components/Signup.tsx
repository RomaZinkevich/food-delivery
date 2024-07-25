import React from "react";
import "../Styles/Signup.css";

const Signup = () => {
  return (
    <div className="loginContainer">
      <form className="loginForm">
        <div className="title">
          <h2>Login</h2>
        </div>
        <div className="inputs">
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email ID" required />
          <input type="password" placeholder="Enter your Password" required />
        </div>
        <button className="signupButton"></button>
      </form>
    </div>
  );
};

export default Signup;
