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
    const id = `${entries.length}${userInput}${message}`;
    setEntries((prevState) => [...prevState, { user: userInput, message, id }]);
    setMessage('');
    const input = document.getElementById('message-input');
    input.focus();
  };

  return (
    <form onSubmit={formSubmit}>
      {user ? (
        <button
          onClick={() => {
            setUser('');
          }}
        >{`Not '${user}'?`}</button>
      ) : (
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
        id="message-input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="submit" value="Submit Message" />
    </form>
  );
}
