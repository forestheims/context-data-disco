import React from 'react';
import { useEntries } from '../../context/EntriesContext';

export default function EntryList() {
  const { entries } = useEntries();
  return (
    <>
      {entries.map(({ id, message, user }) => (
        <div className="entry" key={id}>
          <p>{message}</p>
          <p>{user}</p>
        </div>
      ))}
    </>
  );
}
