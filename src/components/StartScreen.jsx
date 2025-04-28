import React from "react";

function StartScreen() {
  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome!</h2>
      <p className="text-lg mb-6 text-gray-600">Ready to start the quiz?</p>
      <button
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-900 cursor-not-allowed opacity-50"
        disabled
      >
        Start Quiz (Coming Soon!)
      </button>
    </div>
  );
}

export default StartScreen;
