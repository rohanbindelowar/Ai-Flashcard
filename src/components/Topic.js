import React from 'react'
import '../styles/Topic.css'

const Topic = () => {
    function handleClick(){
        return true;
    }
  return (
    <div>
        <h2 className="">Choose your Topic: </h2>
        <div className="topicList">
            <div className="topic" id="react" value="react"  onClick={handleClick}>React.js</div>
            <div className="topic" id='html' value='html' onClick={handleClick}>HTML</div>
            <div className="topic" id='dsa' value='dsa' onClick={handleClick}>DSA</div>
            <div className="topic" id='js' value='js' onClick={handleClick}>JavaScript</div>
            <div className="topic" id='axiox' value='axiox' onClick={handleClick}>Axiox</div>
        </div>

    </div>
  )
}

export default Topic;
