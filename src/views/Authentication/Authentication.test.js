import React from 'react';
import { render } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import Authentication from './Authentication';
import { MemoryRouter } from 'react-router-dom';

test('loign view snapshot test', async () => {
  const container = render(
    <UserProvider>
      <MemoryRouter>
        <Authentication />
      </MemoryRouter>
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});
