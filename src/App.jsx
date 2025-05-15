import React, { useState, useEffect } from "react";
import "./App.css";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
import StartScreen from "./components/StartScreen";
import { quizData, QUIZ_TIME_LIMIT, TIMEOUT_PENALTY } from "./data/Questions";

// Helper function to get initial state from localStorage or set defaults
const getInitialState = () => {
  const savedProgress = localStorage.getItem("quizProgress");
  if (savedProgress) {
    try {
      const parsedProgress = JSON.parse(savedProgress);
      // Ensure timeLeft is not stale if quiz was not active or if QUIZ_TIME_LIMIT changed
      // If quiz is active, use saved timeLeft. Otherwise, or if it's invalid, reset.
      if (parsedProgress.quizState === "active") {
        if (
          typeof parsedProgress.timeLeft !== "number" ||
          parsedProgress.timeLeft < 0
        ) {
          parsedProgress.timeLeft = QUIZ_TIME_LIMIT; // Reset if invalid
        }
      } else {
        // For 'start' or 'result' state, timeLeft should be the default limit
        parsedProgress.timeLeft = QUIZ_TIME_LIMIT;
      }
      return parsedProgress;
    } catch (error) {
      console.error("Failed to parse quiz progress from localStorage:", error);
      // Fallback to default state if parsing fails
    }
  }
  return {
    quizState: "start",
    currentQuestion: 0,
    score: 0,
    selectedAnswer: null,
    timeLeft: QUIZ_TIME_LIMIT,
    results: [],
  };
};

function App() {
  const initialState = getInitialState();

  const [quizState, setQuizState] = useState(initialState.quizState);
  const [currentQuestion, setCurrentQuestion] = useState(
    initialState.currentQuestion
  );
  const [score, setScore] = useState(initialState.score);
  const [selectedAnswer, setSelectedAnswer] = useState(
    initialState.selectedAnswer
  );
  const [timeLeft, setTimeLeft] = useState(initialState.timeLeft);
  const [results, setResults] = useState(initialState.results);

  // Effect to save quiz progress to localStorage whenever relevant state changes
  useEffect(() => {
    const quizProgress = {
      quizState,
      currentQuestion,
      score,
      selectedAnswer,
      timeLeft: quizState === "active" ? timeLeft : QUIZ_TIME_LIMIT, // Only save active timeLeft
      results,
    };
    try {
      localStorage.setItem("quizProgress", JSON.stringify(quizProgress));
    } catch (error) {
      console.error("Failed to save quiz progress to localStorage:", error);
    }
  }, [quizState, currentQuestion, score, selectedAnswer, timeLeft, results]);

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
    if (selectedAnswer !== null && quizState === "active") {
      // Allow selection only if quiz is active and no answer selected yet
      return;
    }
    setSelectedAnswer(option);
  };

  // Function to handle moving to the next question
  const handleNextQuestion = () => {
    if (selectedAnswer === null) return; // Prevent moving if no answer is selected

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

    recordResult(true); // Record as skipped

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
    // Clear saved progress from localStorage as well for a fresh start
    try {
      localStorage.removeItem("quizProgress");
    } catch (error) {
      console.error("Failed to remove quiz progress from localStorage:", error);
    }
    setQuizState("start");
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setTimeLeft(QUIZ_TIME_LIMIT);
    setResults([]);
  };

  // Function to render the appropriate content based on the quiz state
  const renderContent = () => {
    switch (quizState) {
      case "start":
        return (
          <StartScreen
            onStartQuiz={handleStartQuiz} // Corrected prop name from onStartQuizb
            totalQuestions={quizData.length}
            timeLimit={QUIZ_TIME_LIMIT}
          />
        );
      case "active":
        // Ensure quizData[currentQuestion] exists to prevent errors on fast refresh/state inconsistencies
        if (!quizData[currentQuestion]) {
          // This might happen if currentQuestion is out of bounds after a refresh
          // Or if quizData is not yet loaded (though it's imported statically here)
          console.warn("Current question data not found, resetting to start.");
          handleRestartQuiz(); // Or handleStartQuiz() to reset to a valid state
          return <p>Loading quiz or error in state, resetting...</p>;
        }
        return (
          <QuestionCard
            questionData={quizData[currentQuestion]}
            onAnswerSelect={handleAnswerSelection}
            onNextQuestion={handleNextQuestion}
            selectedAnswer={selectedAnswer}
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
        // Fallback to start screen if quizState is unknown
        return (
          <StartScreen
            onStartQuiz={handleStartQuiz}
            totalQuestions={quizData.length}
            timeLimit={QUIZ_TIME_LIMIT}
          />
        );
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
