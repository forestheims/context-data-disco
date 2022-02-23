import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Authentication() {
  const history = useHistory();
  const location = useLocation();
  const { setUser } = useUser();
  const [formState, setFormState] = useState({ name: '', email: '', password: '' });
  const { from } = location.state || { from: { pathname: '/' } };
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // if email and password are correct
    if (
      formState.email === process.env.REACT_APP_AUTH_EMAIL &&
      formState.password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setUser(formState.name);
      setFormState({ name: '', email: '', password: '' });
      history.replace(from.pathname);
    } else {
      setError('login failed: try again');
    }
  };

  return (
    <>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setFormState({ ...formState, password: e.target.value })}
        ></input>
        <input type="submit" onClick={handleSubmit} value="Sign In" />
      </form>
      <h3>{error}</h3>
    </>
  );
}
