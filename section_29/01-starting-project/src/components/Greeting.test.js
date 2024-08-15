import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Greeting', () => {
    render(<Greeting />);
    const linkElement = screen.getByText(/Good to see you/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders "Changed!" when button is clicked', () => {
    render(<Greeting />);

    // const buttonElement = screen.getByRole('button');
    // buttonElement.click();

    // OR

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    const linkElement = screen.getByText(/Changed!/i);
    const textElement = screen.queryByText(/good to see you/i);

    expect(textElement).toBeNull();
    expect(linkElement).toBeInTheDocument();
  });
});
