
import './App.css';
import Header from './components/Header';
import Topic from './components/Topic';
import '@google/generative-ai'
import { GoogleGenerativeAI } from '@google/generative-ai';

function App() {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  return (
    <div className="App">
      <Header/>
      <Topic/>
    </div>
  );
}

export default App;
