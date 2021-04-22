import { useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

const App = () => {
  const getApiUrl = () => {
    if (process.env.NODE_ENV === "development")
      return process.env.REACT_APP_LOCAL_API;
    return process.env.REACT_APP_STAGING_API;
  };

  const testApi = async () => {
    try {
      const urlBase = getApiUrl();
      const response = await axios.get(`${urlBase}/test-api`);
      const { data } = response;

      console.log("FROM API:", data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    testApi();
    // createUser();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Hellloooo</h1>
        <h2>Jesus</h2>
      </header>
    </div>
  );
};

export default App;
