import React from 'react';
import { useEntries } from '../../context/EntriesContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './EntryList.css';

export default function EntryList() {
  const { entries } = useEntries();

  const [localEntries, setLocalEntries] = useLocalStorage('entries', []);

  console.log('entries', entries);
  console.log('localEntries', localEntries);

  const handleClick = (entry) => {
    const currentLocalEntries = localEntries;
    if (!currentLocalEntries.includes((incEntry) => incEntry.id === entry.id)) {
      console.log('entries', entries);
      console.log('localEntries', localEntries);
      console.log('currentLocalEntries', currentLocalEntries);
      setLocalEntries([...localEntries, entry]);
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
