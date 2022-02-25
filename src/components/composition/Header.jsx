import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();

  return (
    <header>
      <div>{user ? `Hello, ${user}!` : `Welcome! Please Sign In to Take Notes`}</div>
    </header>
  );
}
