import { useEffect, useState } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  // amount captures the value entered by the user, and is "" by default

  const [output, setOutput] = useState(0);
  // output captures the value of the converted currency

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/e8772cabc7f54672116f1cf4/pair/EUR/USD/100",
      props.currencyFrom + "/" + props.currencyTo + "/" + amount
    )
      // 1. Call the API with the correct method and headers
      .then((res) => res.json())
      // 2. Get the JSON response
      .then((data) => setOutput(data.conversion_result));
    // 3. Call setOutput to store the value
  }, [
    // 5. Think about when you want useEffect to run again
    //    Which variables, when modified, should trigger useEffect?
    amount,
    props.currencyFrom,
    props.currencyTo,
  ]);

  return (
    <div className="currencyContainer">
      <input
        value={amount}
        placeholder="Enter amount"
        className="converterInput"
        onChange={(event) => {
          setAmount(event.target.value);
        }}
      />
      <p>{props.currencyFrom}</p>
      <p>=</p>
      <p className="convertedAmount">{output}</p>
      <p>{props.currencyTo}</p>
    </div>
  );
}

export default CurrencyConverter;
