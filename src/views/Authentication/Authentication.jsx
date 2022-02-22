import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function Authentication() {
  const history = useHistory();
  const location = useLocation();
  const [, setLocalUser] = useLocalStorage('user', '');
  const [formState, setFormState] = useState({ name: '', email: '', password: '' });
  const { from } = location.state || { from: { pathname: '/' } };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if email and password are correct
    setLocalUser(formState.name);
    setFormState({ name: '', email: '', password: '' });
    history.replace(from);
  };

  return (
    <>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" placeholder="Name" onChange={() => setFormState}></input>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="Email" onChange={() => setFormState}></input>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={() => setFormState}
        ></input>
        <input type="submit" onClick={handleSubmit} value="Sign In" />
      </form>
    </>
  );
}
