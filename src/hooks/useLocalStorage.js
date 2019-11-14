import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedCart, setStoredCart] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }
    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const persistCart = item => {
    setStoredCart(item);
    window.localStorage.setItem(key, JSON.stringify(item));
  };

  return [storedCart, persistCart];
};
