import React from 'react';
import { useAppContext } from '../../../context/Composition';

export default function EntryList() {
  const { user, entries } = useAppContext();
  return (
    <>
      <h2>EntryList</h2>
      {entries.map(() => {})}
    </>
  );
}
