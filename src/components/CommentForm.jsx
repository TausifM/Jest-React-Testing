import React, { useState } from "react";

const CommentForm = ({ setComments }) => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const addComments = () => {
    setComments((prev) => [...prev, { id: Date.now(), comment: text , name : checked ? "Anonymous" : "User" }]);
    setText("");
  };
  return (
    <div>
      <h2>Comment Form</h2>
      <input
        type="text"
        placeholder="write comments here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="checkbox"
        id="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(prev => !prev)}
      />
      <label htmlFor="checkbox">I agree to Terms and Conditions</label>
      <button disabled={!checked || !text} onClick={addComments}>
        Comment
      </button>
    </div>
  );
};

export default CommentForm;
