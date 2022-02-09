import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { UserProvider } from './context/UserContext';
import { EntriesProvider } from './context/EntriesContext';

test('behavioral test #1:', () => {
  render(
    <UserProvider>
      <EntriesProvider>
        <App />
      </EntriesProvider>
    </UserProvider>
  );

  const userInput = screen.getAllByRole('textbox');
  const submitButton = screen.getByRole('button', { name: /submit message/i });

  userEvent.type(userInput[0], 'Mister Princess');
  userEvent.type(userInput[1], 'meow meow meow. Meow, meow Meowmeow...');
  userEvent.click(submitButton);

  const logoutButton = screen.getByRole('button', { name: `Not 'Mister Princess'?` });
  expect(logoutButton).toBeInTheDocument();

  const headings = screen.getAllByRole('heading');
  expect(headings[0].textContent).toBe('meow meow meow. Meow, meow Meowmeow...');
  expect(headings[1].textContent).toBe('- Mister Princess');
});
