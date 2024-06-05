import React from "react";
import ReactDOM from "react-dom/client";

// Import the Home page component
import Home from "./pages/home.jsx";

// Import and apply CSS stylesheet
import "./styles/styles.css";

export default function App() {
  return (
    <>
     <Home />
    </>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")
)
.render(
 <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
