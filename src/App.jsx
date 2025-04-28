import "./App.css";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
import StartScreen from "./components/StartScreen";

function App() {
  const currentScreen = <StartScreen />;
  const Results = <ResultScreen />;
  return (
    <>
      <div
        className="min-h-screen w-full bg-gradient-to-br from-indigo-100 to-pink-100
      flex flex-col items-center justify-center p-4 font-sans "
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Quiz App</h1>
        {currentScreen}
      </div>{" "}
    </>
  );
}

export default App;
