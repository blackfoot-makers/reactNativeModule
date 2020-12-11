import React, { useContext, useState } from 'react';

export const ListContext = React.createContext();

export const ListContextProvider = ({ children }) => {
  const listState = useState([]);
  return (
    <ListContext.Provider value={listState}>
      {children}
    </ListContext.Provider>
  )
}

export const useList = () => useContext(ListContext);