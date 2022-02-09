import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { UserProvider } from './context/UserContext';
import { EntriesProvider } from './context/EntriesContext';

test('behavioral test #1:', async () => {
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

  const headings = document.querySelectorAll('.test-selector');
  expect(headings[0].textContent).toBe('meow meow meow. Meow, meow Meowmeow...');
  expect(headings[1].textContent).toBe('- Mister Princess');

  userEvent.type(userInput[1], 'catspeak testing meows');
  userEvent.click(submitButton);

  const headingsDoubled = document.querySelectorAll('.test-selector');
  expect(headingsDoubled[0].textContent).toBe('meow meow meow. Meow, meow Meowmeow...');
  expect(headingsDoubled[1].textContent).toBe('- Mister Princess');
  expect(headingsDoubled[2].textContent).toBe('catspeak testing meows');
  expect(headingsDoubled[3].textContent).toBe('- Mister Princess');

  waitForElementToBeRemoved(logoutButton);
  userEvent.click(logoutButton);

  const nextUserInput = screen.getAllByRole('textbox');
  userEvent.type(nextUserInput[0], 'xMiss Prince');
  userEvent.type(nextUserInput[1], 'I am not a cat');
  userEvent.click(submitButton);

  const headingsTrippled = document.querySelectorAll('.test-selector');
  expect(headingsTrippled[0].textContent).toBe('meow meow meow. Meow, meow Meowmeow...');
  expect(headingsTrippled[1].textContent).toBe('- Mister Princess');
  expect(headingsTrippled[2].textContent).toBe('catspeak testing meows');
  expect(headingsTrippled[3].textContent).toBe('- Mister Princess');
  expect(headingsTrippled[4].textContent).toBe('I am not a cat');
  expect(headingsTrippled[5].textContent).toBe('- Miss Prince');
});
