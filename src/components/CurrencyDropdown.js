// CurrencyDropdown.js
import React from 'react';

const CurrencyDropdown = ({ setSelectedCurrency }) => {
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div>
      <label htmlFor="currency">Select currency:</label>
      <select id="currency" onChange={handleCurrencyChange}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default CurrencyDropdown;
