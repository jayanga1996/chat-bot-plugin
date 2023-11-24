import { render, screen } from '@testing-library/react';
import SpemaiChatSdk from './SpemaiChatSdk';

test('renders learn react link', () => {
  render(<SpemaiChatSdk />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
