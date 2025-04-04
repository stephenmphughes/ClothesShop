import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  render(<App />);
  const heading = screen.getByText(/Clothing Store Inventory/i);
  expect(heading).toBeInTheDocument();
});
