import React from 'react';
import { useAppContext } from '../../views/Composition/Composition';

export default function EntryList() {
  const { entries } = useAppContext();
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
