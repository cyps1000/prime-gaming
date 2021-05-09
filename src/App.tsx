import { Fragment } from "react";

/**
 * Component Imports
 */
import Routes from "./components/Routes";
import Providers from "./components/Providers";
import { ThemeProvider, LanguageProvider } from "./hooks";

/**
 * Normalizes all css for maximum browser compatibility
 */
import CssBaseline from "@material-ui/core/CssBaseline";

/**
 * Imports some app specific css
 */
import "./App.css";

/**
 * Displays the component
 */
const App: React.FC = () => {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider>
        <LanguageProvider>
          <Providers>
            <Routes />
          </Providers>
        </LanguageProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
