import React, { useEffect } from "react";
import { renderLatex } from "../data/Questions";

function QuestionCard({
  questionData,
  onAnswerSelect,
  onNextQuestion,
  selectedAnswer,

  timeLeft,
  setTimeLeft,
  handleTimeOut,
  questionNumber,
  totalQuestions,
}) {
  // Timer Effect - runs when timeLeft changes or component mounts/unmounts
  useEffect(() => {
    if (timeLeft > 0 && selectedAnswer === null) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && selectedAnswer === null) {
      handleTimeOut();
    }
  }, [timeLeft, setTimeLeft, selectedAnswer, handleTimeOut]);

  if (!questionData) {
    return <div>Loading question...</div>;
  }

  const { question, options, correctAnswer } = questionData;
  const getButtonClass = (option) => {
    if (selectedAnswer === null) {
      return "bg-white hover:bg-gray-100 border-gray-300 text-gray-800 cursor-pointer";
    }
    const isSelected = selectedAnswer === option;
    const isCorrect = option === correctAnswer;

    if (isSelected) {
      // Style for the button the user actually clicked
      return isCorrect
        ? "bg-green-200 border-green-400 text-green-800 cursor-not-allowed"
        : "bg-red-200 border-red-400 text-red-800 cursor-not-allowed";
    } else if (isCorrect) {
      // Style for the correct answer button when the user selected incorrectly
      return "bg-green-200 border-green-400 text-green-800 cursor-not-allowed";
    } else {
      // Style for other incorrect, unselected options
      return "bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed opacity-70";
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      {/* Optional: Display question number */}
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

      {
        <div className="text-center mt-6">
          <button
            onClick={onNextQuestion}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 cursor-pointer"
          >
            {questionNumber === totalQuestions
              ? "Show Results"
              : "Next Question"}
          </button>
        </div>
      }
    </div>
  );
}

export default QuestionCard;
