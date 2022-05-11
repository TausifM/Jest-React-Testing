import { render, screen, logRoles } from '@testing-library/react';
import App from './App';
test("testing of app basics", () => {
  render(<App/>);
  // Checking Roles of HTML Elements
  logRoles(screen.getByTestId("myrootdiv"))
  // If you don't want to render any element 
  const inputElem = screen.queryByRole("textbox", {placeholder: "type name here", exact: false})
  // expect(inputElem).not.toBeInTheDocument();
  expect(inputElem).toBeInTheDocument();
  // Checking Element present in the documents
  const buttonElem = screen.getByRole("button", {name : "test button", exact: false})
  expect(buttonElem).toBeInTheDocument()
})