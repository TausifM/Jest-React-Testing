import { render, screen } from "@testing-library/react";
import CommentList from '../components/CommentList'
test("Initial CommentList" ,  () => {
    render(<CommentList allcomments={[]}/>);
    const h2Elem =  screen.getByText("no comments", {exact: false});
    expect(h2Elem).toBeInTheDocument();
});
test("List All Comments" ,  () => {
    const comments = [
        { id: 1, name: "John", comment: "Hello World" },
        { id: 2, name: "Doe", comment: "Hello World" },
        { id: 3, name: "Jimmy", comment: "Hello World" },
    ];
    render(<CommentList allcomments={comments}/>);
    const h2Elem =  screen.queryByText("no comments", {exact: false});
    expect(h2Elem).not.toBeInTheDocument();
    const commentLi = screen.getAllByRole("listitem");
    // if you want to check the number of elements in the list 
    // toBe used for primitive types and toEqual for comparing the non primitive type arrays and objects
    expect(commentLi.length).toBe(3);
    // if you want to check the number of elements in the list
    // toBeLessThan used for primitive types and toBeLessThanOrEqual for comparing the non primitive type arrays and objects
    expect(commentLi.length).toBeLessThan(4);
    // if you want to check the number of elements in the list
    // toBeGreaterThan used for primitive types and toBeGreaterThanOrEqual for comparing the non primitive type arrays and objects
    expect(commentLi.length).toBeGreaterThan(2);
    // if you want to check the number of comments in the list then comments.length in the toBe
    expect(commentLi.length).toBe(comments.length);
})