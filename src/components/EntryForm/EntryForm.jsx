import React, { useState, useEffect } from 'react';
import { useEntries } from '../../context/EntriesContext';
import { useUser } from '../../context/UserContext';
import './EntryForm.css';

export default function EntryForm() {
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();

  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setUserInput(user);
  }, [user]);

  const formSubmit = (e) => {
    e.preventDefault();
    setUser(userInput);
    const id = entries.length;
    setEntries([...entries, { user: userInput, message, id }]);
    setMessage('');
  };

  return (
    <form onSubmit={formSubmit}>
      {!user && (
        <>
          <label>User:</label>
          <input
            type="text"
            placeholder="Name"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </>
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
