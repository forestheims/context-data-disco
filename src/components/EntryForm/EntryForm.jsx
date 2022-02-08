import React, { useState } from 'react';
import { useAppContext } from '../../context/Composition';

export default function EntryForm() {
  const { user, setUser, entries, setEntries } = useAppContext();

  const [userInput, setUserInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, { user: user, message: messageInput }]);
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
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <input type="submit" value="Submit Message" />
    </form>
  );
}
