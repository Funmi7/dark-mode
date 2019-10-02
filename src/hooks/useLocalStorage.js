import react from 'react';


const useLocalStorage = (key, initialValue) => {
    const [storeValue, setStoreValue] = useState(() => {
        const valueFromLocalStorage = localStorage.getItem(key);
        return valueFromLocalStorage ? 
        JSON.parse(item) 
        : initialValue; 
    });

    
}