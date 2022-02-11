import React from 'react';
import { useEntries } from '../../context/EntriesContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './EntryList.css';

const classNames = require('classnames');

export default function EntryList() {
  const { entries } = useEntries();
  const [localEntries, setLocalEntries] = useLocalStorage('entries', []);

  const handleClick = (entry) => {
    if (!localEntries.some(({ id }) => id === entry.id)) {
      setLocalEntries([...localEntries, entry]);
    } else {
      setLocalEntries(localEntries.filter(({ id }) => id !== entry.id));
    }
  };

  return (
    <div className="entrylist">
      {entries.map(({ id, message, user }) => (
        <div
          key={id}
          className={classNames('entry-border', {
            'saved-class': localEntries.some((entry) => entry.id === id),
          })}
          onClick={() => handleClick({ id, message, user })}
        >
          <div className="entry">
            <p className="message test-selector">{message}</p>
          </div>
          <p className="user test-selector">- {user}</p>
        </div>
      ))}
    </div>
  );
}
