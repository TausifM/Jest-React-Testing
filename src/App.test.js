import { render, screen } from '@testing-library/react';
import App from './App';
test("testing of app basics", () => {
  render(<App/>);
  const buttonElem = screen.getByRole("button", {name : "test button", exact: false})
  expect(buttonElem).toBeInTheDocument()
})