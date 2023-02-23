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
      {commentsData.map((comment) => (
        <ul>
          <li
            key={comment.id}
            id={comment.id}
            style={{ cursor: "pointer" }}
            onClick={clickHandler}
          >
            <i>{comment.body}</i>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Comments;
