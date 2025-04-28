export const quizData = [
  {
    id: 1, // Unique identifier for the question (useful for keys in React)
    question: "What is the capital of France?", // The text of the question
    options: ["Berlin", "Madrid", "Paris", "Lisbon"], // An array of possible answers
    correctAnswer: "Paris", // The correct answer string (must match one of the options)
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    id: 4,
    // Using $ symbols for potential math notation
    question: "What is $2+2$?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    id: 5,
    question: "Which country is the largest by area?",
    options: ["Canada", "China", "USA", "Russia"],
    correctAnswer: "Russia",
  },
];

export const QUIZ_TIME_LIMIT = 60;
export const TIMEOUT_PENALTY = 1;

//Helper Function (Placeholder)
export const renderLatex = (text) => {
  // Simple removal of $ delimiters for basic display.
  // Return the original text if it's not a string (safety check)
  if (typeof text !== "string") {
    return text;
  }
  return text.replace(/\$/g, "");
};
