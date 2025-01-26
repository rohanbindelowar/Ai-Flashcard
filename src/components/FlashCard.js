import React from 'react'
import '../styles/FlashCard.css'

const FlashCard = ({topic, flashcard, loading, error}) => {
    console.log(flashcard)
  return (
    <div>
    
        <div className="flashcard-container">
        <h2 className="">Current Topic is {topic.toUpperCase()}</h2>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : flashcard ? (
          <div className="flashcard">
            <div className="flashcard-front">
              <h3>Question</h3>
              <p>{flashcard.question}</p>
            </div>
            <div className="flashcard-back">
              <h3>Answer</h3>
              <p>{flashcard.answer}</p>
            </div>
          </div>
        ) : (
          <div className="placeholder">Select a topic to generate a flashcard</div>
        )}
      </div>
    </div>

  )
}
export default FlashCard;