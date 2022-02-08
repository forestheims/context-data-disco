import React from 'react';
import { useAppContext } from '../../context/Composition';

export default function EntryForm() {
  const { user } = useAppContext();
  return (
    <>
      <h2>EntryForm</h2>
      <form></form>
    </>
  );
}
