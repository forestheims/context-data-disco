import React, { useState } from 'react';

export default function Instructions() {
  const [instruct, setInstruct] = useState(true);

  return (
    <>
      {localStorage.getItem('visited') === null && instruct && (
        <div className="instruction">
          <h2>Instructions:</h2>
          <h3>Click on an entry to save and delete it</h3>
          <h3>You can set the username to anything</h3>
          <h3>Email must be &apos;amino@bits.com&apos;</h3>
          <h3>Password must be &apos;abc123&apos;</h3>
          <button
            onClick={() => {
              localStorage.setItem('visited', false);
              setInstruct(false);
            }}
          >
            Okay. don&apos;t remind me again
          </button>
          <button onClick={() => setInstruct(false)}>Remind me again next time I visit</button>
        </div>
      )}
    </>
  );
}
