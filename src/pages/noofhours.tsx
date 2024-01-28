// NoOfHours.tsx

import React, { useState } from "react";
import "./noofhours.css";

interface RateMap {
  [key: string]: number;
}

const NoOfHours: React.FC = () => {
  const [designation, setDesignation] = useState<string>("");
  const [hours, setHours] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const rateMap: RateMap = {
    "assistant professor": 1500,
    "associate professor": 2000,
    professor: 2000,
  };

  const handleDesignationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedDesignation = event.target.value;
    setDesignation(selectedDesignation);
    setRate(rateMap[selectedDesignation]);
  };

  const handleHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredHours = parseInt(event.target.value, 10);
    setHours(enteredHours);
  };

  const calculateAmount = () => {
    const amount = hours * rate;
    setTotalAmount(amount);
  };

  return (
    <form>
      <div className="input-container">
        <label>Designation:</label>
        <select
          value={designation}
          onChange={(e) => handleDesignationChange(e)}
        >
          <option value="">Select Designation</option>
          <option value="assistant professor">Assistant Professor</option>
          <option value="associate professor">Associate Professor</option>
          <option value="professor">Professor</option>
        </select>
      </div>
      <div className="label-container">
        <label>
          Number of Hours:
          <input type="number" value={hours} onChange={handleHoursChange} />
        </label>
      </div>
      <div className="label-container">
        <label>Rate: Rs. {rate}</label>
      </div>
      <button onClick={calculateAmount}>Calculate Amount</button>
      <div className="label-container">
        <label>Total Amount: Rs. {totalAmount}</label>
      </div>
      <div className="button-container">
        <button className="submit-button" type="submit">
          Submit
        </button>
        <button className="generate-bill-button" type="submit">
          Submit and Generate Bill
        </button>
      </div>
    </form>
  );
};

export default NoOfHours;

