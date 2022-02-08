import React, { createContext, useContext, useState } from 'react';
import './Composition.css';
import Footer from '../components/composition/Footer';
import Header from '../components/composition/Header';

const AppContext = createContext();

export function Composition({ children }) {
  const [user, setUser] = useState('User NAME');
  const [entries, setEntries] = useState([]);

  const contextValue = { user, setUser, entries, setEntries };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="composition">
        <Header user={user} />
        <main>{children}</main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('Error: ...');
  }
  return context;
}
