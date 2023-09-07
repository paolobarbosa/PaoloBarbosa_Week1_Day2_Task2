// ParentComponent.js
import React, { useState } from 'react';
import './ParentComponent.css';
import GroceryList from './GroceryList';

const ParentComponent = () => {
  const [groceryItems, setGroceryItems] = useState([]);

  const addGroceryItem = (item) => {
    setGroceryItems([...groceryItems, item]);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <GroceryList addGroceryItem={addGroceryItem} />
      <h2>Grocery Items</h2>
      <ul>
        {groceryItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent;
