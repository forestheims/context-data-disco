import React from 'react';
import { useUser } from '../../context/UserContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function Header() {
  const { user, setUser } = useUser();
  const [, setLocalUser] = useLocalStorage('user', '');

  return (
    <header>
      <a href="https://github.com/forestheims/context-data-disco">GitHub Repo Link</a>
      {user && (
        <button
          onClick={() => {
            setUser('');
            setLocalUser('');
          }}
        >{`Not '${user}'?`}</button>
      )}
      <div>
        <div className="welcome">
          {user ? `Hello, ${user}!` : `Welcome! Please Enjoy the Local Storage NotePad`}
        </div>
        <div className="instruction">Click on an entry to save it into Local Storage</div>
      </div>
    </header>
  );
}
