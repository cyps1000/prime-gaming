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
 * Imports Mock API server
 */
import { makeServer } from "./mock/server";

/**
 * Mocks an api server during development only
 */
makeServer({ environment: "development" });

ReactDOM.render(<App />, document.getElementById("root"));
