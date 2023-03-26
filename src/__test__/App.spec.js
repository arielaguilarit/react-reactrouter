import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
describe('<App />', () => {
  beforeEach(() => {
    render(<App />);
  });
  test('Render Component', () => {
    const text = 'Welcome to React Router from my pc!!!!';
    const title = screen.queryByText(text);
    expect(title).toBeInTheDocument();
  });
  test('Sing in onclick button', () => {
    const textBtn = 'Sign In';
    const btn = screen.getByText(textBtn);
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
  });
});
