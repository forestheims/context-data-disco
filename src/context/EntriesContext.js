import { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const EntriesContext = createContext();

export function EntriesProvider({ children }) {
  const [localEntries] = useLocalStorage('entries', []);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(localEntries);
  }, [localEntries]);

  // setEntries(localEntries);

  const contextValue = { entries, setEntries };

  return <EntriesContext.Provider value={contextValue}>{children}</EntriesContext.Provider>;
}

export function useEntries() {
  const context = useContext(EntriesContext);
  if (context === undefined) {
    throw new Error('Error: useEntries needs to be called within a EntriesProvider');
  }
  return context;
}
