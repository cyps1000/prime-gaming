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

/**
 * Imports Mock API server
 */
import { makeServer } from "./mock/server";

/**
 * Mocks an api server during development only
 */
if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
