import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createBrowserHistory as useHistory } from "history";
import "./Login.css";

interface CustomButtonProps {
  onClick: (e: React.FormEvent) => void;
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      className="custom-button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const Login: React.FC = () => {
  const history = useHistory(); // Get the history object from react-router-dom

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    // Email validation
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      setLoading(false);
      return;
    } else {
      setEmailError("");
    }

    // Password validation
    if (!validatePassword(password)) {
      setPasswordError("Please enter a valid password");
      setLoading(false);
      return;
    } else {
      setPasswordError("");
    }

    // Simulate login logic (replace with your actual login logic)
    try {
      // Your login logic here

      // Simulating a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Login successful");
      // Redirect to the home page ("/") after successful login
      history.push("/home");
    } catch (error) {
      setLoginError("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
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
        {loginError && <p className="error-message">{loginError}</p>}
        <CustomButton type="submit" onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
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
