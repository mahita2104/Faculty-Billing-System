import React from "react";
import "./signup.css";
import Button from "../components/button";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  return (
    <div className="signup-container">
      <div className="scrollable-form">
        <form className="signup-form">
          <h2>Sign Up</h2>
          <div className="input-container">
            <label htmlFor="name" className="label-heading">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="Designation">Designation</label>
            <input
              type="text"
              id="designation"
              name="designation"
              placeholder="Enter your designation"
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="PAN No.">PAN No.</label>
            <input
              type="text"
              id="PAN No."
              name="PAN No."
              placeholder="Enter your PAN No."
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone No.</label>
            <div className="subfields">
              <div className="subfield">
                <label htmlFor="telephone">Telephone No.</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  placeholder="Enter telephone number"
                  required
                />
              </div>
              <div className="subfield">
                <label htmlFor="mobile">Mobile No.</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter mobile number"
                  required
                />
              </div>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="bank">Bank Details</label>
            <div className="subfields">
              <div className="subfield">
                <label htmlFor="bank name">Bank Name</label>
                <input
                  type="text"
                  id="bank name"
                  name="bank name"
                  placeholder="Enter bank name"
                  required
                />
              </div>
              <div className="subfield">
                <label htmlFor="branch name">Branch Name</label>
                <input
                  type="text"
                  id="branch name"
                  name="branch name"
                  placeholder="Enter branch name"
                  required
                />
              </div>
              <div className="subfield">
                <label htmlFor="bank acc no.">Bank Account No.</label>
                <input
                  type="text"
                  id="bank acc no."
                  name="bank acc no."
                  placeholder="Enter bank account no."
                  required
                />
              </div>
              <div className="subfield">
                <label htmlFor="IFSC Code">IFSC Code</label>
                <input
                  type="text"
                  id="IFSC Code"
                  name="IFSC Code"
                  placeholder="Enter IFSC Code"
                  required
                />
              </div>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="set password">Set Password</label>
            <input
              type="text"
              id="set password"
              name="set password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="confirm password">Confirm Password</label>
            <input
              type="text"
              id="confirm password"
              name="confirm password"
              placeholder="Confirm your password"
              required
            />
          </div>
          <Button onClick={() => console.log("Sign Up clicked")}>
            Sign Up
          </Button>
        </form>
        <div className="switch-page">
          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
