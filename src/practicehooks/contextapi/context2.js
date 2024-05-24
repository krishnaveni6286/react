

// context.js
import React, { createContext, useState } from "react";

export const CountContext = createContext();

export const ContextProvider = ({ children }) => {


    
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider value={{ count, updateCount }}>
      {children}
    </CountContext.Provider>
  );
};
