import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/input.css";
import "./assets/styles/output.css";
import "./assets/styles/fonts.css";
import { MemoryGame } from "./components/MemoryGame";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MemoryGame />
  </React.StrictMode>
);
