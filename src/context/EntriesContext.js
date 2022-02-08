import { createContext, useContext, useState } from 'react';

const EntriesContext = createContext();

export function EntriesProvider({ children }) {
  const [entries, setEntries] = useState([]);

  const contextValue = { entries, setEntries };

  return <EntriesContext.Provider value={contextValue}>{children}</EntriesContext.Provider>;
}

export function useEntries() {
  const context = useContext(EntriesContext);
  if (context === undefined) {
    throw new Error('Error: ...');
  }
  return context;
}
