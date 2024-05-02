import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cats, setCats] = useState([]);

  const updateCats = (newCats) => {
    setCats(newCats);
  };

  return (
    <GlobalContext.Provider value={{ cats, updateCats }}>
      {children}
    </GlobalContext.Provider>
  );
};
