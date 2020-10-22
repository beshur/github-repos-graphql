import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Repo Explorer in header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Repo Explorer/i);
  expect(linkElement).toBeInTheDocument();
});
