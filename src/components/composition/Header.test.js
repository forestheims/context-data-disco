import { screen, render } from '@testing-library/react';

import { UserProvider } from '../../context/UserContext';
import Header from './Header';

test('renders header with a link and a welcome message', () => {
  render(
    <UserProvider>
      <Header />
    </UserProvider>
  );

  const headerWelcome = screen.getByText(/welcome! please enjoy the local notepad/i);
  expect(headerWelcome).toBeInTheDocument();

  const headerLink = screen.getByRole('link', { name: /github repo link/i });
  expect(headerLink).toBeInTheDocument();
});
