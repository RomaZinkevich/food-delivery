import React, { useState } from "react";
import "../Styles/Signup.css";
import axios from "axios";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [authentication, setAuthentication] = useState("Signup");

  const handleSubmission = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const config = {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      };

      const { data } = await axios.post(
        "http://46.101.197.215/api/users/",
        config
      );

      if (data?.success) {
        alert("Account created successfully");
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmission} className="loginContainer">
        <div className="title">
          <h2>{authentication === "Signup" ? "Signup" : "Login"}</h2>
        </div>
        {authentication == "Signup" ? (
          <div className="inputs">
            <input
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
              required
            />
            {}
            <input
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Enter your email ID"
              required
            />
            {}
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Enter your Password"
              required
            />
          </div>
        ) : (
          <div className="inputs">
            <input
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Enter your email ID"
              required
            />
            {}
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Enter your Password"
              required
            />
          </div>
        )}
        {}
        <button type="submit" className="button">
          {authentication === "Signup" ? "Signup" : "Login"}
        </button>
        <br />
        <a
          onClick={() => {
            authentication === "Signup"
              ? setAuthentication("Login")
              : setAuthentication("Signup");
          }}
        >
          {authentication === "Signup"
            ? "Already have an account? Click here"
            : "Don't have an account? Register here."}
        </a>
      </form>
    </div>
  );
};

export default Signup;
