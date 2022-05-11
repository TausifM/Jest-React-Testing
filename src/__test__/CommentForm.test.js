import { fireEvent, render, screen } from "@testing-library/react";
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
    fireEvent.change(commentInput, {target: {value: "Hello World"}});

    //If Check box is clicked then Submit enabled
    fireEvent.click(checkboxElem);
    expect(submitElem).toBeEnabled()

    //If Check box is unclicked then Submit disabled
    fireEvent.click(checkboxElem);
    expect(submitElem).toBeDisabled()
})