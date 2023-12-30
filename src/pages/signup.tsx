import React, { useState } from "react";
import "./signup.css";
import Button from "../components/button";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const [errors, setErrors] = useState<any>({});

  const validateEmail = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePAN = (pan: string): boolean => {
    return /^[a-zA-Z0-9]{10}$/.test(pan);
  };

  const validateIFSC = (ifsc: string): boolean => {
    return /^[a-zA-Z0-9]{11}$/.test(ifsc);
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const validatePasswordMatch = (
    password: string,
    confirmPassword: string
  ): boolean => {
    return password === confirmPassword;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const pan = formData.get("PAN No.") as string;
    const ifsc = formData.get("IFSC Code") as string;
    const mobile = formData.get("mobile") as string;
    const telephone = formData.get("telephone") as string;
    const password = formData.get("set password") as string;
    const confirmPassword = formData.get("confirm password") as string;

    const newErrors: any = {};

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!validatePAN(pan)) {
      newErrors.pan = "PAN should be alphanumeric with 10 characters";
    }

    if (!validateIFSC(ifsc)) {
      newErrors.ifsc = "IFSC should be alphanumeric with 11 characters";
    }

    if (!validatePhoneNumber(mobile)) {
      newErrors.mobile = "Mobile number should be 10 digits";
    }

    if (!validatePhoneNumber(telephone)) {
      newErrors.telephone = "Telephone number should be 10 digits";
    }

    if (!validatePasswordMatch(password, confirmPassword)) {
      newErrors.password = "Passwords do not match";
    }

    setErrors(newErrors);
  };

  return (
    <div className="scrollable-form">
      <form className="signup-form" onSubmit={handleSubmit}>
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
          <label htmlFor="Designation">Designation</label>
          <input
            type="text"
            id="designation"
            name="designation"
            placeholder="Enter your designation"
            required
          />
        </div>

        {/* ... Other input fields ... */}
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}
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
          {errors.pan && <div className="error">{errors.pan}</div>}
        </div>
        <div className="input-container">
          <label htmlFor="phone">Phone No.</label>
          <div className="subfields">
            <div className="subfield">
              <label htmlFor="mobile">Mobile No.</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Enter mobile number"
                required
              />
              {errors.mobile && <div className="error">{errors.mobile}</div>}
            </div>
            <div className="subfield">
              <label htmlFor="telephone">Alternate No.</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                placeholder="Enter alternate number"
                required
              />
              {errors.telephone && (
                <div className="error">{errors.telephone}</div>
              )}
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
              {errors.ifsc && <div className="error">{errors.ifsc}</div>}
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
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        {/* ... Other input fields ... */}
        <Button type="submit">Sign Up</Button>
      </form>
      <div className="switch-page">
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
