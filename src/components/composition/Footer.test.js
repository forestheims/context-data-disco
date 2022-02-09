import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('Footer renders a github logo img that is a link', () => {
  render(<Footer />);
  const githubLink = screen.getByRole('link', { name: /github link/i });
  expect(githubLink).toBeInTheDocument();
});
