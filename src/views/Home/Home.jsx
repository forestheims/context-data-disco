import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  return (
    <>
      <button onClick={() => history.push('/notes')}>Add a Note</button>
    </>
  );
}
