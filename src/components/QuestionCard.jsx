import React from "react";

function QuestionCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <div className="text-lg font-bold mb-4 text-center text-gray-700">
        Time Left: 60s
      </div>

      <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
        This is where the question text will go.
      </h3>

      <div className="space-y-3">
        <button className="w-full text-left px-4 py-3 rounded-lg border bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed">
          Option A (Coming Soon!)
        </button>
        <button className="w-full text-left px-4 py-3 rounded-lg border bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed">
          Option B (Coming Soon!)
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
