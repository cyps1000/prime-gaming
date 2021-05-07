/**
 * Component Imports
 */
import Routes from "./components/Routes";
import Providers from "./components/Providers";
import { ThemeProvider, LanguageProvider } from "./hooks";

/**
 * Normalizes all css for maximum browser compatibility
 */
import "normalize.css";

/**
 * Imports some app specific css
 */
import "./App.css";

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
