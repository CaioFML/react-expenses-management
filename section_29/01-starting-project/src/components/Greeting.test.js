import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Greeting', () => {
    render(<Greeting />);
    const linkElement = screen.getByText(/Good to see you/i);
    expect(linkElement).toBeInTheDocument();
  });
});
