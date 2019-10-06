import useLocalStorage from './useLocalStorage';
import {useEffect} from 'react';

const  useDarkMode = (key, initialValue) => {
    const [darkModeValue, setDarkModeValue] = useLocalStorage(key, initialValue);
  
    useEffect(() => {
      let body = document.body;
      darkModeValue ?
      body.classList.add('dark-mode')
      : body.classList.remove('dark-mode') 
    }, [darkModeValue]);
  
    return [darkModeValue, setDarkModeValue]
  }

  export default useDarkMode;