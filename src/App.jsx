import React, { useState } from "react";
import "./App.css";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
import StartScreen from "./components/StartScreen";
import { quizData, QUIZ_TIME_LIMIT, TIMEOUT_PENALTY } from "./data/Questions";

function App() {
  const [quizState, setQuizState] = useState("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME_LIMIT);
  const [results, setResults] = useState([]);

  // Function to handle the start of the quiz
  const handleStartQuiz = () => {
    setQuizState("active");
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setTimeLeft(QUIZ_TIME_LIMIT);
    setResults([]);
  };

  // Function to record the result before moving on
  const recordResult = (skipped = false) => {
    const currentQData = quizData[currentQuestion];
    const isCorrect = !skipped && selectedAnswer === currentQData.correctAnswer;

    setResults((prevResults) => [
      ...prevResults,
      {
        question: currentQData.question,
        options: currentQData.options,
        correctAnswer: currentQData.correctAnswer,
        userAnswer: skipped ? null : selectedAnswer,
        isCorrect: isCorrect,
        skipped: skipped,
      },
    ]);

    // Update score if the answer was correct (only if not skipped)
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  // Function to handle the selection of an answer
  const handleAnswerSelection = (option) => {
    if (selectedAnswer !== null) {
      return;
    }
    setSelectedAnswer(option);
  };

  // Function to handle moving to the next question
  const handleNextQuestion = () => {
    recordResult(false);

    // Reset timer for the next question
    setTimeLeft(QUIZ_TIME_LIMIT);

    // Check if there are more questions
    if (currentQuestion + 1 < quizData.length) {
      // Move to the next question
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizState("result");
    }
  };

  // Function to handle the timeout event
  const handleTimeOut = () => {
    // Ensure score doesn't go below 0
    setScore((prevScore) => Math.max(0, prevScore - TIMEOUT_PENALTY));

    recordResult(true);

    // Reset timer for the next question (or doesn't matter if ending)
    setTimeLeft(QUIZ_TIME_LIMIT);

    // Check if there are more questions
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizState("result");
    }
  };

  const handleRestartQuiz = () => {
    setQuizState("start");
  };

  // Function to render the appropriate content based on the quiz state
  const renderContent = () => {
    switch (quizState) {
      case "start":
        // Pass necessary props to StartScreen
        return (
          <StartScreen
            onStartQuizb={handleStartQuiz}
            totalQuestions={quizData.length}
            timeLimit={QUIZ_TIME_LIMIT}
          />
        );
      case "active":
        // isAnswerCorrect prop is not used in QuestionCard, removing
        return (
          <QuestionCard
            questionData={quizData[currentQuestion]}
            onAnswerSelect={handleAnswerSelection}
            onNextQuestion={handleNextQuestion}
            selectedAnswer={selectedAnswer}
            // isAnswerCorrect={isCorrectForCard} // Removed as not used in QuestionCard
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            handleTimeOut={handleTimeOut}
            questionNumber={currentQuestion + 1}
            totalQuestions={quizData.length}
          />
        );
      case "result":
        return (
          <ResultScreen
            score={score}
            totalQuestions={quizData.length}
            onRestartQuiz={handleRestartQuiz}
            results={results}
          />
        );
      default:
        // Pass necessary props to StartScreen in default case too
        return (
          <StartScreen
            onStartQuizb={handleStartQuiz}
            totalQuestions={quizData.length}
            timeLimit={QUIZ_TIME_LIMIT}
          />
        ); // Line ~137
    }
  };

  return (
    <>
      <div
        className="min-h-screen w-full bg-gradient-to-br from-indigo-100 to-pink-100
      flex flex-col items-center justify-center p-4 font-sans "
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Quiz App</h1>
        <div className="w-full max-w-3xl">{renderContent()}</div>
      </div>{" "}
    </>
  );
}

export default App;
