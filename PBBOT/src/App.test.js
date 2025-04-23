import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChatContainer component', () => {
  render(<App />);
  const chatContainer = screen.getByText(/chat/i); // Adjust text based on actual content inside ChatContainer
  expect(chatContainer).toBeInTheDocument();
});
