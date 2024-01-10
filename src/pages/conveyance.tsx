import React, { useState } from 'react';

const KilometerCalculator: React.FC = () => {
  const [kilometers, setKilometers] = useState<number>(0);
  const [ratePerKm, setRatePerKm] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const handleKilometersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredKilometers = parseFloat(event.target.value);
    setKilometers(enteredKilometers);
  };

  const handleRatePerKmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredRate = parseFloat(event.target.value);
    setRatePerKm(enteredRate);
  };

  const calculateTotalAmount = () => {
    const amount = kilometers * ratePerKm;
    setTotalAmount(amount);
  };

  return (
    <div>
      <label>
        Number of Kilometers:
        <input type="number" value={kilometers} onChange={handleKilometersChange} />
      </label>
      <br />
      <label>
        Rate per Kilometer:
        <input type="number" value={ratePerKm} onChange={handleRatePerKmChange} />
      </label>
      <br />
      <button onClick={calculateTotalAmount}>Calculate Total Amount</button>
      <br />
      {totalAmount > 0 && (
        <p>Total Amount: Rs. {totalAmount}</p>
      )}
    </div>
  );
};

export default KilometerCalculator;
