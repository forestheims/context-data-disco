import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user, setUser } = useUser();
  return (
    <header>
      <a href="https://github.com/forestheims/context-data-disco">
        GitHub Repo: useContext in action
      </a>
      {user && <button onClick={() => setUser('')}>{`Not '${user}'?`}</button>}
      <div>{user ? `Hello, ${user}!` : `Welcome! Please Sign the message board`}</div>
    </header>
  );
}
