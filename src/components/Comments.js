import React, { useState, useEffect } from "react";

const Comments = () => {
  const [commentsData, setCommentsData] = useState([]);

  const clickHandler = (e) => {
    console.log(e.target.id);
  };

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments`
      );
      const data = await response.json();
      setCommentsData(data);
    };

    fetchComments();
  }, []);

  return (
    <div>
      <ul>
        {commentsData.map((comment) => (
          <li
            key={comment.id}
            id={comment.id}
            style={{ cursor: "pointer", paddingBottom: "10px" }}
            onClick={clickHandler}
          >
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
