# AI Flashcards

AI Flashcards is a React-based web application that helps users study effectively by creating and reviewing flashcards. The app integrates with the Gemini API and Axios to fetch AI-powered content like hints, explanations, or related questions, making the learning process smarter and more engaging.

---

## Features

- **Create Flashcards**
  - Add topics and answers manually.
  - Use Gemini API to generate AI-powered content automatically.

- **AI-Powered Assistance**
  - Fetch AI-generated hints, explanations, or summaries for better understanding.

- **Review Mode**
  - Shuffle and study flashcards effectively.

- **Organized Learning**
  - Categorize flashcards and use tags to filter and search them.

---

## How to Run

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/rohanbindelowar/ai-flashcards.git
   cd ai-flashcards
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Set Up API Key**  
   - Sign up for Gemini API.
   - Add your API key to a `.env` file in the root directory:
     ```env
     REACT_APP_GEMINI_API_KEY=your_gemini_api_key
     ```

4. **Run the App**  
   ```bash
   npm start
   ```

---

## Technologies Used

```json
{
  "Frontend": "React.js",
  "API Calls": "Axios",
  "AI Integration": "Gemini API",
  "Styling": "Tailwind CSS or Material-UI",
  "State Management": "Redux or Context API"
}
```



### Key Points:
- Axios is used for making API calls.
- Gemini API is integrated for AI-powered features like generating hints or related content.

