import React, { useState } from "react";

const CommentForm = () => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
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
        placeholder="write comments here"
        value={text}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="checkbox">I agree to Terms and Conditions</label>
      <button
      disabled={!checked || !text}
      onClick={() => { console.log("Comment submitted") }}
      >Comment</button>
    </div>
  );
};

export default CommentForm;
