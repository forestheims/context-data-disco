import React from 'react';
import { useAppContext } from '../../context/Composition';

export default function Header() {
  const { user } = useAppContext();
  return <header>{user}</header>;
}
