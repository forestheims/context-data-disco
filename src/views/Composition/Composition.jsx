import './Composition.css';
import Footer from '../../components/composition/Footer';
import Header from '../../components/composition/Header';
import { useState } from 'react';

export function Composition({ children }) {
  const [instruct, setInstruct] = useState(true);
  return (
    <div className="composition">
      <Header />
      <main>
        {localStorage.getItem('visited') === null && instruct && (
          <div className="instruction">
            <h2>Instructions:</h2>
            <h3>Click on an entry to save / delete it on Local Storage (entries will not be </h3>
            <button
              onClick={() => {
                localStorage.setItem('visited', false);
                setInstruct(false);
              }}
            >
              OK
            </button>
            <button onClick={() => setInstruct(false)}>Remind me again next time</button>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
}
