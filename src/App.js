import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";

function App() {
  const comments = [
    { id: 1, name: "John", comment: "Hello World" },
    { id: 2, name: "Doe", comment: "Hello" },
    { id: 3, name: "Jimmy", comment: "Hello World" },
  ];
  return (
    <div className="App" data-testid="myrootdiv">
      <h1>Testing of React</h1>
      {/* <input type="text" placeholder="type name here" /> */}
      <button>test button</button>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li><p>Hi</p></li>
      </ul>
      <CommentForm />
      <CommentList allcomments={comments} />
    </div>
  );
}

export default App;
