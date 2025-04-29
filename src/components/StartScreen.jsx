import React from "react";

// Main Quiz Icon (e.g., Academic Cap)
const QuizIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-20 h-20 mx-auto text-indigo-600 mb-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    />
  </svg>
);

// Icon for Number of Questions (List Bullet)
const ListIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 text-indigo-500 flex-shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 6.75h12M8.25 12h12M8.25 17.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    />
  </svg>
);

// Icon for Time Limit (Clock)
const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 text-indigo-500 flex-shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

// Icon for Scoring (Check/X or similar - using Scale here)
const ScoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-3 text-indigo-500 flex-shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52c2.62 1.96 5.25 3.92 7.875 5.88m-7.875-5.88c-2.621 1.96-5.25 3.92-7.875 5.88m18-5.88v3.375c0 1.621-.829 3.121-2.121 3.938-1.292.817-2.873 1.262-4.5 1.262h-3.75c-1.627 0-3.208-.445-4.5-1.262C4.579 14.621 3.75 13.121 3.75 11.5v-3.375m15 0c.621 0 1.242-.038 1.85-.108a48.411 48.411 0 0 1 3.15-.517m-3.15.517c.486-.086.96-.18 1.416-.288m-1.416.288c1.01.143 2.01.317 3 .52m-3-.52c2.62 1.96 5.25 3.92 7.875 5.88m-7.875-5.88c-2.621 1.96-5.25 3.92-7.875 5.88m18-5.88v3.375c0 1.621-.829 3.121-2.121 3.938-1.292.817-2.873 1.262-4.5 1.262h-3.75c-1.627 0-3.208-.445-4.5-1.262C4.579 14.621 3.75 13.121 3.75 11.5v-3.375M3.75 4.97c.622 0 1.244.038 1.852.108a48.408 48.408 0 0 0 3.148.517m-3.148-.517c-.486-.086-.96-.18-1.416-.288m1.416.288c-1.01.143-2.01.317-3 .52m3-.52c-2.621 1.96-5.25 3.92-7.875 5.88m7.875-5.88c2.621 1.96 5.25 3.92 7.875 5.88"
    />
  </svg>
);

// Icon for Button (Arrow Right)
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6 ml-3"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

function StartScreen({ onStartQuizb, totalQuestions, timeLimit }) {
  return (
    // Glassmorphism Container
    <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 w-full max-w-xl mx-auto text-center">
      <QuizIcon />

      <h2 className="text-4xl font-bold mb-3 text-gray-900">Quiz Time!</h2>
      <p className="text-xl mb-8 text-gray-700">
        Ready to test your knowledge?
      </p>

      {/* Details List with Icons */}
      <ul className="space-y-4 text-left mb-10 text-lg text-gray-800 max-w-md mx-auto">
        <li className="flex items-center p-3 bg-white/50 rounded-lg shadow-sm border border-white/30">
          <ListIcon />
          <span>
            <span className="font-semibold">{totalQuestions}</span> Multiple
            Choice Questions
          </span>
        </li>
        <li className="flex items-center p-3 bg-white/50 rounded-lg shadow-sm border border-white/30">
          <ClockIcon />
          <span>
            <span className="font-semibold">{timeLimit}</span> Seconds per
            Question
          </span>
        </li>
        <li className="flex items-center p-3 bg-white/50 rounded-lg shadow-sm border border-white/30">
          <ScoreIcon />
          <span>
            <span className="font-semibold">+1</span> Point Correct /{" "}
            <span className="font-semibold">-1</span> Point Timeout
          </span>
        </li>
      </ul>

      <button
        className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-700 text-white text-xl font-bold rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        onClick={onStartQuizb}
      >
        Start Quiz
        <ArrowRightIcon />
      </button>
    </div>
  );
}

export default StartScreen;
