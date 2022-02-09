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
            <h5>{message}</h5>
          </div>
          <h6>- {user}</h6>
        </div>
      ))}
    </div>
  );
}
