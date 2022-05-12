import { render, screen, logRoles } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App'
test("testing of app basics", () => {
  render(<App/>);
  // Checking Roles of HTML Elements
  logRoles(screen.getByTestId("myrootdiv"))
  // If you don't want to render any element 
  const inputElem = screen.queryByRole("textbox", {placeholder: "type name here", exact: false})
  // expect(inputElem).not.toBeInTheDocument();
  expect(inputElem).toBeInTheDocument();
  // Checking Element present in the documents
  const buttonElem = screen.getByRole("button", {name : "Comment", exact: false})
  expect(buttonElem).toBeInTheDocument()
})

test("Comments get display at Initial Stage", async() => {
  render(<App/>);
  const commentInput = screen.getAllByPlaceholderText("write comments here");
  const checkboxElem = screen.getByLabelText("i agree to terms and conditions",  {exact: false});
  const submitElem = screen.getByRole("button", {name: "Comment", exact: false});
  await userEvent.type(commentInput, "Hello World");
  await userEvent.click(checkboxElem);
  await userEvent.click(submitElem);
  const commentList = screen.getAllByRole("list");
  expect(commentList).toBe(commentList);
  const commentListItem = screen.getAllByText("Hello World");
  expect(commentListItem).toHaveLength(2);
})
test("Comments get display after submitting 2", () => {
  render(<App/>);
  const commentInput = screen.getByRole("textbox");
  const checkboxElem = screen.getByLabelText("i agree to terms and conditions",  {exact: false});
  const submitElem = screen.getByRole("button", {name: "Comment", exact: false});
  userEvent.type(commentInput, "Hello World");
  userEvent.click(checkboxElem);
  userEvent.click(submitElem);
  userEvent.type(commentInput, "awesome");
  userEvent.click(submitElem);
  const commentList = screen.getAllByRole("listitem");
  expect(commentList.length).toBe(6); // li present in App.js and CommentList.js
  const commentListItem = screen.getByText("Hello");
  expect(commentListItem).toBeInTheDocument();
  
})