import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  test('Render Component', () => {
    render(<App />);
    const text = 'Welcome to React Router from my pc!!!!';
    const title = screen.queryByText(text);
    expect(title).toBeInTheDocument();
  });
  test('Sing in onclick button', () => {
    render(<App />);
    const textBtn = 'Sign In';
    const btn = screen.getByText(textBtn);
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
  });
});
