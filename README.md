# ⚛️ React Quiz Application 🧠

Repository: https://github.com/radherathod/quiz_app
Live URL: https://quizj.netlify.app/

---

A simple, interactive quiz application built using React, Vite, and Tailwind CSS. Users are presented with multiple-choice questions, receive immediate feedback, and see their score at the end.

---

## 🚀 Features (Implemented So Far)

* **🏠 Start Screen:** Welcomes the user and displays the total number of questions.
* **❓ Question Display:** Presents questions one at a time with multiple-choice options.
* **🖱️ Answer Selection:** Allows users to click on an option to select their answer.
* **✅ Immediate Feedback:** Highlights the selected answer (green if correct, red if incorrect) and shows the correct answer. Disables options after selection.
* **📊 Score Tracking:** Basic score increment for correct answers.
* **➡️ Navigation:** A "Next Question" button appears after answering (logic to advance is pending).
* **⚙️ State Management:** Uses React Hooks (`useState`) to manage the application state (current screen, current question, score, etc.).
* **🎨 Styling:** Uses Tailwind CSS for utility-first styling.

---

## 🛠️ Technologies Used

* [**Vite**](https://vitejs.dev/) - Frontend Tooling (Development Server, Build)
* [**React**](https://react.dev/) - JavaScript Library for Building User Interfaces
* [**Tailwind CSS**](https://tailwindcss.com/) - Utility-First CSS Framework

---

## ⚙️ Project Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/radherathod/quiz_app.git](https://github.com/radherathod/quiz_app.git)
    cd quiz_app
    ```

2.  **Install dependencies:**
    Make sure you have [Node.js](https://nodejs.org/) (which includes npm) installed. Then run:
    ```bash
    npm install
    ```

---

## 💻 Running Locally

To start the development server:

```bash
npm run dev
This will typically open the application in your browser at http://localhost:5173 (the port may vary). The server supports Hot Module Replacement (HMR) for a fast development experience.📦 Building for ProductionTo create an optimized production build:npm run build
The output files will be generated in the dist folder. This folder contains the static assets ready for deployment.☁️ DeploymentThis application is designed for easy deployment to static hosting platforms like:NetlifyVercelGitHub PagesFor Netlify / Vercel, connect your Git repository and configure the build settings as follows:Build command: npm run buildPublish directory: dist📄 React + Vite (Template Information)This section contains standard information from the Vite React template.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.Currently, two official plugins are available:@vitejs/plugin-react uses Babel for Fast Refresh@vitejs/plugin-react-swc uses SWC for Fast RefreshExpanding the ESLint configurationIf you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the TS template for information on how to integrate TypeScript and [typescript-eslint](
