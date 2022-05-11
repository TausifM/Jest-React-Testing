import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentForm from "../components/CommentForm";

test("Comment Form initial test",  () => {
    render(<CommentForm/>)
    // Checking Input elem in the documents
    const commentInput = screen.getByRole("textbox");
    // Assertions means expect
    expect(commentInput).toBeInTheDocument();
    // Checking checkbox in the documents 
    const checkboxElem = screen.getByLabelText("i agree to terms and conditions",  {exact: false});
    expect(checkboxElem).toBeInTheDocument();
    // We want submit button to be disabled at the initial starting point
    const submitElem = screen.getByRole("button", {exact: false});
    expect(submitElem).toBeDisabled()
});
 
test("After filling Data in the Comment Form", () => {
    render(<CommentForm /> );
    const commentInput = screen.getByRole("textbox");
    const checkboxElem = screen.getByLabelText("i agree to terms and conditions",  {exact: false});
    const submitElem = screen.getByRole("button", {exact: false});
    // their are two method for events testing in react 1. fireEvent(event, element) 2. userEvent.type(element, value)
    //fireEvent.change(commentInput, {target: {value: "Hello World"}}); // this is for fire event testing
    userEvent.type(commentInput, "Hello World"); // this is for userEvent testing
    //If Check box is clicked then Submit enabled
    fireEvent.click(checkboxElem);
    expect(submitElem).toBeEnabled()

    //If Check box is unclicked then Submit disabled
    fireEvent.click(checkboxElem);
    expect(submitElem).toBeDisabled()
})