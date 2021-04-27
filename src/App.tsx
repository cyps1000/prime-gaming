import { Suspense, Fragment } from "react";
/**
 * Component Imports
 */
import Routes from "./components/Routes";
import Providers from "./components/Providers";
import { ThemeProvider, LanguageProvider } from "./hooks";

/**
 * Displays the component
 */
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Providers>
          <Routes />
        </Providers>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
