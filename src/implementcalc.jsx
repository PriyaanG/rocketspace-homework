import React from "react";
import ReactDOM from "react-dom/client";

// Import the Home page component
import CalcPage from "./pages/calculator.jsx";

// Import and apply CSS stylesheet
import "./styles/styles.css";

export default function Calc() {
  return (
    <>
     <CalcPage />
    </>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")
)
.render(
 <React.StrictMode>
    <Calc />
  </React.StrictMode>,
);
