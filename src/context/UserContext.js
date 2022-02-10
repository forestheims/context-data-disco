import { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [localUser] = useLocalStorage('user', '');
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(localUser);
  }, [localUser]);

  const contextValue = { user, setUser };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('Error: useUser needs to be called within a UserProvider');
  }
  return context;
}
