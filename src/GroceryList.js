// src/GroceryList.js
import React, { useState } from 'react';
import './GroceryList.css';

const GroceryList = ({ addGroceryItem }) => {
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleSubmit = () => {
    if (newItem.trim() !== '') {
      addGroceryItem(newItem);
      setNewItem('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div>
      <h1>Week 1 Day 2</h1>
      <h2>Task 2</h2>
      <h3>Grocery List</h3>
      <div className="card">
        <input
          type="text"
          placeholder="Add a grocery item"
          value={newItem}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className="add-button" onClick={handleSubmit}>
          <b>Add</b>
        </button>
      </div>
    </div>
  );
};

export default GroceryList;
