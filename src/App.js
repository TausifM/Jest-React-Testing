import { useState } from "react";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";

function App() {
  //After Intergration Testing Comments are stored in the state
  // Functionality is implemented
  const [comments, setComments] = useState([]);
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
      <CommentForm  setComments={setComments}/>
      <CommentList allcomments={comments} />
    </div>
  );
}

export default App;
