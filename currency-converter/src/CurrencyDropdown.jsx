import { useEffect, useState } from "react";
import "./CurrencyStyling.css";
import CurrencyConverter from "./CurrencyConverter";

function CurrencyDropdown() {
  const [currencies, setCurrencies] = useState([]);
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("SGD");

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/e8772cabc7f54672116f1cf4/codes")
      .then((res) => res.json())
      .then((data) => setCurrencies(data.supported_codes));
  }, []);

  return (
    <div className="currencyContainer">
      <p> I want to convert</p>
      <select name="currency" id="currencySelect">
        {currencies.map((currency) => (
          <option value={currency[0]} key={currency[0]}>
            {currency[1]}
          </option>
        ))}
      </select>
      <p>to</p>
      <select name="currency" id="currencySelect">
        {currencies.map((currency) => (
          <option value={currency[0]} key={currency[0]}>
            {currency[1]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyDropdown;
