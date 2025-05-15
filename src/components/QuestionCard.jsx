// /home/radhe/Projects/quiz_app/src/components/QuestionCard.jsx
import React, { useEffect } from "react";
import { renderLatex } from "../data/Questions";

function QuestionCard({
  questionData,
  onAnswerSelect,
  onNextQuestion,
  selectedAnswer,
  timeLeft,
  setTimeLeft, // Prop to update time in App state
  handleTimeOut, // Prop to call when time runs out
  questionNumber,
  totalQuestions,
}) {
  // --- Timer Effect ---
  useEffect(() => {
    // If time is up, trigger the timeout handler in App.jsx
    if (timeLeft <= 0) {
      handleTimeOut();
      return; // Stop the effect here if time is up
    }

    // Set up the interval to decrease time by 1 second
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1); // Update time in App.jsx state
    }, 1000);

    // Cleanup: Clear the timeout when the component unmounts or timeLeft changes
    // This prevents memory leaks and multiple timers running.
    return () => clearTimeout(timer);

    // Dependencies: Only re-run if timeLeft, setTimeLeft, or handleTimeOut changes.
    // Crucially, selectedAnswer is NOT included here, so the timer keeps running after selection.
  }, [timeLeft, setTimeLeft, handleTimeOut]);

  // --- Rest of the component remains the same ---

  if (!questionData) {
    return <div>Loading question...</div>;
  }

  const { question, options, correctAnswer } = questionData;

  // Function to determine button styling (no changes needed here)
  const getButtonClass = (option) => {
    if (selectedAnswer === null) {
      return "bg-white hover:bg-gray-100 border-gray-300 text-gray-800 cursor-pointer";
    }
    const isSelected = selectedAnswer === option;
    const isCorrect = option === correctAnswer;

    if (isSelected) {
      return isCorrect
        ? "bg-green-200 border-green-400 text-green-800 cursor-not-allowed"
        : "bg-red-200 border-red-400 text-red-800 cursor-not-allowed";
    } else if (isCorrect) {
      return "bg-green-200 border-green-400 text-green-800 cursor-not-allowed";
    } else {
      return "bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed opacity-70";
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-medium text-gray-500">
          Question {questionNumber} / {totalQuestions}
        </div>
        <div className="text-lg font-bold text-center text-gray-700">
          Time Left: {timeLeft}s
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
        {renderLatex(question)}
      </h3>

      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(option)}
            disabled={selectedAnswer !== null}
            className={`w-full text-left px-4 py-3 rounded-lg border transition-colors duration-200 ${getButtonClass(
              option
            )}`}
          >
            {renderLatex(option)}
          </button>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={onNextQuestion}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={selectedAnswer === null}
        >
          {questionNumber === totalQuestions ? "Show Results" : "Next Question"}
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
