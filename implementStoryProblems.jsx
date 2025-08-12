import React from "react";
import ReactDOM from "react-dom/client";

// Import the Home page component
import Story_Problems from "./pages/story_problems.jsx";

// Import and apply CSS stylesheet
import "./styles/styles.css";

export default function StoryProblems() {
  return (
    <>
     <Story_Problems />
    </>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")
)
.render(
 <React.StrictMode>
    <StoryProblems />
  </React.StrictMode>,
);
