import React from "react";

function ResultScreen() {
  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Quiz Finished!</h2>

      <p className="text-xl font-semibold mb-6 text-indigo-600">
        Your final score will appear here.
      </p>

      <div className="text-left border border-gray-200 rounded-lg p-4 bg-gray-50">
        <p className="text-gray-600">Results breakdown will be shown here...</p>
      </div>

      <button
        className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 cursor-not-allowed opacity-50"
        disabled
      >
        Restart Quiz (Coming Soon!)
      </button>
    </div>
  );
}

export default ResultScreen;
