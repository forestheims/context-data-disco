import React, { useState } from 'react';
import { useEntries } from '../../context/EntriesContext';
import { useUser } from '../../context/UserContext';
import './EntryForm.css';

export default function EntryForm() {
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();

  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    setUser(userInput);
    const id = entries.length;
    setEntries([...entries, { user: userInput, message, id }]);
  };

  return (
    <form onSubmit={formSubmit}>
      {!user ? (
        <>
          <label>User:</label>
          <input
            type="text"
            placeholder="Name"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </>
      ) : (
        <button onClick={() => setUser('')}>{`Not ${user}?`}</button>
      )}
      <label>Message:</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="submit" value="Submit Message" />
    </form>
  );
}
