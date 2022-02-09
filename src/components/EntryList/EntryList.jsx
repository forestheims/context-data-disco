import React from 'react';
import { useEntries } from '../../context/EntriesContext';
import './EntryList.css';

export default function EntryList() {
  const { entries } = useEntries();
  return (
    <div className="entrylist">
      {entries.map(({ id, message, user }) => (
        <div key={id} className="entry-border">
          <div className="entry">
            <p className="message test-selector">{message}</p>
          </div>
          <p className="user test-selector">- {user}</p>
        </div>
      ))}
    </div>
  );
}
