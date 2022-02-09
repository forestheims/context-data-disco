import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  return (
    <header>
      <a href="https://github.com/forestheims/context-data-disco">Context Data Disco</a>
      <div>{user ? `Hello, ${user}!` : `Welcome! Please Sign the message board`}</div>
    </header>
  );
}
