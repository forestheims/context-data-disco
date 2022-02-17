import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();

  return (
    <header>
      <a href="https://github.com/forestheims/context-data-disco">GitHub Repo Link</a>
      <div>{user ? `Hello, ${user}!` : `Welcome! Please Enjoy the Local NotePad`}</div>
    </header>
  );
}
