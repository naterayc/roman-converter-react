import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn roman convert', () => {
  render(<App />);
  const linkElement = screen.getByText(/roman convert/i);
  expect(linkElement).toBeInTheDocument();
});
