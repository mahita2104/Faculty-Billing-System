import React, { useState, useEffect } from "react";
import "./noofhours.css";

interface BillingHour {
  desgination: string;
  rate_per_hour: number;
}

const RateCalculator: React.FC = () => {
  const [designation, setDesignation] = useState<string>("");
  const [hours, setHours] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    // Fetch billing hours from backend when the component mounts
    fetch("http://localhost:3000/php/noofhours.php")
      .then((response) => response.json())
      .then((data: BillingHour[]) => {
        // Assuming data is an array of billing hours objects
        // You may need to adjust this based on your actual data structure
        const selectedBillingHour = data.find(
          (hour: BillingHour) => hour.desgination === designation
        );

        if (selectedBillingHour) {
          // Assuming the key is "rate_per_hour"
          setRate(selectedBillingHour.rate_per_hour);
        }
      })
      .catch((error) => {
        console.error("Error fetching billing hours:", error);
      });
  }, [designation]);

  const handleDesignationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedDesignation = event.target.value;
    setDesignation(selectedDesignation);
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
