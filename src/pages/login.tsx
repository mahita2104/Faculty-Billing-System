import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

interface CustomButtonProps {
  onClick: (e: React.FormEvent) => void;
  children: React.ReactNode;
  type?: "submit" | "reset" | "button"; // Define type attribute as optional
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  type = "button", // Set default value for type attribute
}) => {
  return (
    <button className="custom-button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }

    // Password validation
    if (!validatePassword(password)) {
      setPasswordError("Please enter a valid password");
      return;
    } else {
      setPasswordError("");
    }

    // If validations pass, proceed with login logic
    console.log("Login successful");
  };

  const validateEmail = (email: string) => {
    // Basic email validation logic (you can use a library or more robust validation)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password: string) => {
    // Basic password validation logic (you can add more specific rules)
    return password.length >= 6; // Example: Password should be at least 6 characters
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <CustomButton type="submit" onClick={handleLogin}>
          Login
        </CustomButton>
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
