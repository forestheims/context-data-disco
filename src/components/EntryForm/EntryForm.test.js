import { screen, render } from '@testing-library/react';
import EntryForm from './EntryForm';
import { UserProvider } from '../../context/UserContext';
import { EntriesProvider } from '../../context/EntriesContext';

test('renders the EntryForm component, two text inputs and a submit button', () => {
  render(
    <UserProvider>
      <EntriesProvider>
        <EntryForm />
      </EntriesProvider>
    </UserProvider>
  );

  const userInput = screen.getAllByRole('textbox');
  const submitButton = screen.getByRole('button', { name: /submit message/i });

  expect(userInput).toHaveLength(2);
  expect(submitButton).toBeInTheDocument();
});
