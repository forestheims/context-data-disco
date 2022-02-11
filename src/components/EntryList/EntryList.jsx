import React from 'react';
import { useEntries } from '../../context/EntriesContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './EntryList.css';

export default function EntryList() {
  const { entries } = useEntries();
  const [localEntries, setLocalEntries] = useLocalStorage('entries', []);

  const handleClick = (entry) => {
    if (!localEntries.some(({ id }) => id === entry.id)) {
      setLocalEntries([...localEntries, entry]);
    } else {
      // remove entry from local storage:
      // - spread out local entries
      // - find the entry object in the array that has a matching id to the clicked entry
      // - remove that object from the array
      // - re-setLocalEntries with the new array
    }
  };

  return (
    <div className="entrylist">
      {entries.map(({ id, message, user }) => (
        <div key={id} className="entry-border" onClick={() => handleClick({ id, message, user })}>
          <div className="entry">
            <p className="message test-selector">{message}</p>
          </div>
          <p className="user test-selector">- {user}</p>
        </div>
      ))}
    </div>
  );
}
