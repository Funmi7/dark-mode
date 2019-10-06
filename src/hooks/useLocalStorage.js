import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
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

  export default useLocalStorage;
  