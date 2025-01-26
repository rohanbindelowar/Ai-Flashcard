import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Topic from './components/Topic';
import '@google/generative-ai';
import { GoogleGenerativeAI } from '@google/generative-ai';
import FlashCard from './components/FlashCard';

function App() {
  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const [topic, setTopic] = useState('coding'); 
  const [flashcard, setFlashcard] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const fetchFlashCard = async() => {
    setLoading(true);
setError(null);
    try{
      const prompt = `create a qustion and answer about ${topic}`;
    const response = await model.generateContent(prompt);
    const content = response.response.candidates[0].content.parts[0].text

    const [question, answer] = content.split('**Answer:**').map((text) => text.trim());
      setFlashcard({ question: question.replace('**Question:**', '').trim(), answer });
    }catch (err) {
      console.error('Error fetching flashcard:', err);
      setError('Failed to generate flashcard. Please try again.');
    } finally {
      setLoading(false);
    }
  }
 useEffect(()=>{

    fetchFlashCard()
 },[topic])

 function handleNewQuestions(){
  fetchFlashCard();
 }
 


  return (
    <div className="App">
      <Header />
      <Topic setTopic={setTopic} />
      <FlashCard topic={topic} flashcard={flashcard} loading={loading} error={error} handleNewQuestions={handleNewQuestions}/>
      
    </div>
  );
}

export default App;
