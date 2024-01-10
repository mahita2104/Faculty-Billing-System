import React, { useState } from "react";
import "./noofhours.css";

interface RateMap {
  [key: string]: number;
}

const RateCalculator: React.FC = () => {
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
    <div className="rate-calculator-container">
      <label>
        Designation:
        <select value={designation} onChange={handleDesignationChange}>
          <option value="">Select Designation</option>
          <option value="assistant professor">Assistant Professor</option>
          <option value="associate professor">Associate Professor</option>
          <option value="professor">Professor</option>
        </select>
      </label>
      <br />
      <label>
        Number of Hours:
        <input type="number" value={hours} onChange={handleHoursChange} />
      </label>
      <br />
      <label>Rate: Rs. {rate}</label>
      <br />
      <button onClick={calculateAmount}>Calculate Amount</button>
      <br />
      <label>Total Amount: Rs. {totalAmount}</label>
    </div>
  );
};

export default RateCalculator;
