import React from "react";
import "./Login.css";
import Button from "../components/button";
import { Link } from "react-router-dom";
//import Header from "../components/header";

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        
        <h2>Login</h2>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <Button onClick={() => console.log("Login clicked")}>Login</Button>
        <div className="switch-page">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
