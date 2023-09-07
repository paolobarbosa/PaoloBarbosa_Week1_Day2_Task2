// src/App.js
import React, { useState } from 'react';
import './App.css';
import GroceryList from './GroceryList';
import GroceryDisplay from './GroceryDisplay';

function App() {
  const [groceries, setGroceries] = useState([]);

  const addGroceryItem = (newItem) => {
    setGroceries([...groceries, newItem]);
  };

  return (
    <div className="App">
      <GroceryList addGroceryItem={addGroceryItem} />
      <GroceryDisplay groceries={groceries} />
    </div>
  );
}

export default App;
