// src/GroceryDisplay.js
import React from 'react';

const GroceryDisplay = ({ groceries }) => {
  return (
    <div>
      <h2>Grocery Display</h2>
      <ul>
        {groceries.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryDisplay;
