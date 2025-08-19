import React, { useEffect } from "react";
import "./App.css";

function App() {
  // Log once when component mounts
  useEffect(() => {
    console.log("Making API Request");
  }, []);

  // Event handler function
  function handleChange() {
    alert("Just click!!");
  }

  return (
    <>
      <h1>Currency Converter</h1>
      <select name="currency" id="currencySelect" onChange={handleChange}>
        <option value="usd">USD</option>
        <option value="jpy">JPY</option>
        <option value="sgd">SGD</option>
        <option value="myr">MYR</option>
      </select>
    </>
  );
}

export default App;
