// import React from 'react'
import { useState } from "react";
import "./Question.css";
function Question({ request, answer }) {
  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!visible);
  };
  return (
    <div className="question">
      <h3
        className={`what_netflix ${visible ? "times_netflix" : ""}  `}
        onClick={handleToggle}
      >
        {request}
      </h3>
      <br />
      {visible && <p className="answer">{answer}</p>}
    </div>
  );
}

export default Question;
