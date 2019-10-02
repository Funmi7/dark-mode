import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
      const valueFromLocalStorage = localStorage.getItem(key);
      return valueFromLocalStorage ? 
      JSON.parse(valueFromLocalStorage) 
      : initialValue; 
  });

  const setValue = value => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value)); 
  };

  return [storedValue, setValue]; 
};

export const  useDarkMode = (key, initialValue) => {
  const [darkModeValue, setDarkModeValue] = useLocalStorage(key, initialValue);

  useEffect(() => {
    let body = document.body;
    darkModeValue ?
    body.classList.add('dark-mode')
    : body.classList.remove('dark-mode') 
  }, [darkModeValue]);

  return [darkModeValue, setDarkModeValue]
}

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
