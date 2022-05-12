import React from "react";

const CommentList = ({ allcomments }) => {
  if (allcomments.length === 0) {
    return <p>No comments yet</p>;
  }

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {allcomments.map((item) => (
          <li key={item.id}>
            <p>{item.comment}</p>
            <p>By :{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
