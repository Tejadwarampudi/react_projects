import React, { useState } from "react";
import Header from "./investment_calculation/Header";
import UserInput from "./investment_calculation/UserInput";
import Result from "./investment_calculation/Result";
import './App.css'
export default function App() {
  const [userInput, setUserInput] = useState({
    initialInvestemnt: 10000,
    annualInvestemnt: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prev => ({
      ...prev,
      [inputIdentifier]: newValue
    }));
  }

  return (
    <div>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      <Result userInput={userInput} />
    </div>
  );
}
