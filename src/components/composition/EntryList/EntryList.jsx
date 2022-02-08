import React from 'react';
import { useAppContext } from '../../../context/Composition';

export default function EntryList() {
  const { entries } = useAppContext();
  return (
    <>
      {entries.map(({ message, user }) => (
        <div className="entry" key={message}>
          <p>{message}</p>
          <p>{user}</p>
        </div>
      ))}
    </>
  );
}
