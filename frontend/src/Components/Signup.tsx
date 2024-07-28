import React from "react";
import "../Styles/Signup.css";

const Signup = () => {
  return (
    <div className="login">
      <form className="loginContainer">
        <div className="title">
          <h2>Sign up</h2>
        </div>
        <div className="inputs">
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email ID" required />
          <input type="password" placeholder="Enter your Password" required />
        </div>
        <button className="button">signup</button>
        <br />
        <a>Already have an account? Click here</a>
      </form>
    </div>
  );
};

export default Signup;
