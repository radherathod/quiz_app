export const quizData = [
  // --- Existing Questions ---
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    id: 4,
    // Using $ symbols for potential math notation
    question: "What is $2+2$?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    id: 5,
    question: "Which country is the largest by area?",
    options: ["Canada", "China", "USA", "Russia"],
    correctAnswer: "Russia",
  },

  // --- New Interesting GK Questions ---
  {
    id: 6,
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    id: 7,
    question:
      "What gas do plants primarily absorb from the atmosphere for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    id: 8,
    question: "In which year did the Titanic sink on its maiden voyage?",
    options: ["1905", "1912", "1918", "1921"],
    correctAnswer: "1912",
  },
  {
    id: 9,
    question: "What does 'CPU' stand for in computer technology?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Power Unit",
      "Control Process Utility",
    ],
    correctAnswer: "Central Processing Unit",
  },
  {
    id: 10,
    question:
      "Which Indian space mission successfully reached Mars orbit on its first attempt?",
    options: [
      "Chandrayaan-1",
      "Chandrayaan-2",
      "Mangalyaan (MOM)",
      "Gaganyaan",
    ],
    correctAnswer: "Mangalyaan (MOM)", // Mars Orbiter Mission
  },
  {
    id: 11,
    question:
      "What is traditionally considered the longest river in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Mississippi River",
      "Yangtze River",
    ],
    correctAnswer: "Nile River", // Note: Amazon length is sometimes debated
  },
  {
    id: 12,
    question: "What element has the chemical symbol 'Fe'?",
    options: ["Gold", "Iron", "Fluorine", "Lead"],
    correctAnswer: "Iron", // Changed from 'O' for more interest
  },
  {
    id: 13,
    question: "Who wrote the famous play 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Leo Tolstoy",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    id: 14,
    // Question relevant to Maharashtra/India history
    question:
      "Which famous Maratha warrior king established his capital at Raigad Fort?",
    options: ["Sambhaji Maharaj", "Shivaji Maharaj", "Bajirao I", "Shahu I"],
    correctAnswer: "Shivaji Maharaj",
  },
  {
    id: 15,
    // Riddle / Logic Question
    question:
      "I have cities, but no houses; forests, but no trees; and water, but no fish. What am I?",
    options: ["A Dream", "A Map", "A Book", "The Internet"],
    correctAnswer: "A Map",
  },
  {
    id: 16,
    question: "What invention is Thomas Edison most famous for perfecting?",
    options: [
      "The Telephone",
      "The Practical Light Bulb",
      "The Steam Engine",
      "The Printing Press",
    ],
    correctAnswer: "The Practical Light Bulb",
  },
  {
    id: 17,
    question: "In Greek mythology, who flew too close to the sun?",
    options: ["Hercules", "Perseus", "Icarus", "Apollo"],
    correctAnswer: "Icarus",
  },
];

// --- Other constants remain the same ---
export const QUIZ_TIME_LIMIT = 60; // You might want to adjust this if questions are harder/longer
export const TIMEOUT_PENALTY = 1;

// --- Helper function remains the same ---
// Helper Function (ensure this handles potential empty strings or non-strings gracefully)
export const renderLatex = (text) => {
  if (typeof text !== "string" || !text) {
    return text; // Return original if not a non-empty string
  }
  // Basic replacement, consider a proper library if complex LaTeX is needed
  return text.replace(/\$/g, "");
};
