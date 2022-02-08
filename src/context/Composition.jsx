import React, { createContext, useContext, useState } from 'react';
import './Composition.css';
import Footer from '../components/composition/Footer';
import Header from '../components/composition/Header';

const AppContext = createContext();

export function Composition({ children }) {
  const [user, setUser] = useState();

  return (
    <AppContext.Provider className="composition" value={{ user, setUser }}>
      <Header user={user} />
      <main>{children}</main>
      <Footer />
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
