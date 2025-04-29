import React from "react";
import { renderLatex } from "../data/Questions";
function ResultScreen({ score, totalQuestions, onRestartQuiz, results }) {
  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Quiz Finished!</h2>

      {/* Final Score Display */}
      <div className="mb-6">
        <p className="text-xl font-semibold text-indigo-600">
          Your final score:
        </p>
        <p className="text-4xl font-bold text-blue-700">
          {score} / {totalQuestions}
        </p>
      </div>

      {/* Summary Text */}
      <div className="text-left border border-gray-200 rounded-lg p-4 bg-gray-50 mb-6">
        <p className="text-gray-700">
          You attempted {results.filter((r) => !r.skipped).length} out of{" "}
          {totalQuestions} questions.
        </p>
      </div>

      {/* Detailed Results Breakdown*/}
      <div className="mt-6 text-left">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          Results Breakdown:
        </h3>
        <ul className="space-y-4">
          {results.map((result, index) => (
            <li
              key={index}
              className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
            >
              <p className="font-semibold text-gray-800 mb-2">
                Q{index + 1}: {renderLatex(result.question)}
              </p>
              {result.skipped ? (
                <p className="text-sm text-orange-600 font-medium">
                  Skipped (Timeout)
                </p>
              ) : (
                <p
                  className={`text-sm ${
                    result.isCorrect ? "text-green-600" : "text-red-600"
                  }`}
                >
                  Your Answer:{" "}
                  {result.userAnswer ? (
                    renderLatex(result.userAnswer)
                  ) : (
                    <span className="italic text-gray-500">Not Answered</span>
                  )}
                  {result.isCorrect ? " (Correct)" : " (Incorrect)"}
                </p>
              )}
              {!result.isCorrect && !result.skipped && (
                <p className="text-sm text-blue-600 mt-1">
                  Correct Answer: {renderLatex(result.correctAnswer)}
                </p>
              )}
              {result.isCorrect && !result.skipped && (
                <p className="text-sm text-green-600 mt-1">
                  Correct Answer: {renderLatex(result.correctAnswer)}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onRestartQuiz}
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 cursor-pointer"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default ResultScreen;
