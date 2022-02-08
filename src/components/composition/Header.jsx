import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  return <header>{user ? `Hello, ${user}!` : `Welcome! Please Sign the message board`}</header>;
}
