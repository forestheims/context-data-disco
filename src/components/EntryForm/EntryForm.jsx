import React, { useState } from 'react';
import { useAppContext } from '../../views/Composition/Composition';
import './EntryList.css';

export default function EntryForm() {
  const { user, setUser, entries, setEntries } = useAppContext();

  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    setUser(userInput);
    setEntries([...entries, { user, message, id: entries.length }]);
  };

  return (
    <form onSubmit={formSubmit}>
      {!user ? (
        <input
          type="text"
          placeholder="Name"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      ) : (
        <button onClick={() => setUser('')}>{`Not ${user}?`}</button>
      )}
      <input
        type="textarea"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="submit" value="Submit Message" />
    </form>
  );
}
