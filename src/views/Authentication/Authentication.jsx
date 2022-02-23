import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Authentication() {
  const history = useHistory();
  const location = useLocation();
  const { user, setUser } = useUser();
  const [formState, setFormState] = useState({ name: '', email: '', password: '' });
  const { from } = location.state || { from: { pathname: '/' } };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    // if email and password are correct
    setUser(formState.name);
    setFormState({ name: '', email: '', password: '' });
    history.replace(from.pathname);
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
    </>
  );
}
