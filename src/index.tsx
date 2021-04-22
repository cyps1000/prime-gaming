import React from "react";
import ReactDOM from "react-dom";

/**
 * Imports App
 */
import App from "./App";

/**
 * Imports i18n
 */
import "./i18n";

/**
 * Normalize all css
 */
import "normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
