import React from 'react';
import '../styles/Topic.css';

const Topic = ({ setTopic }) => {
  function handleClick(e) {
    setTopic(e.target.id); 
  }

  return (
    <div>
      <h2>Choose your Topic:</h2>
      <div className="topicList">
        <div className="topic" id="react" onClick={handleClick}>
          React.js
        </div>
        <div className="topic" id="html" onClick={handleClick}>
          HTML
        </div>
        <div className="topic" id="dsa" onClick={handleClick}>
          DSA
        </div>
        <div className="topic" id="js" onClick={handleClick}>
          JavaScript
        </div>
        <div className="topic" id="axios" onClick={handleClick}>
          Axios
        </div>
      </div>
    </div>
  );
};

export default Topic;
