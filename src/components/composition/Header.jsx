import React from 'react';
import { useAppContext } from '../../views/Composition/Composition';

export default function Header() {
  const { user } = useAppContext();
  return <header>{user ? `Hello, ${user}!` : `Welcome! Please Sign the message board`}</header>;
}
