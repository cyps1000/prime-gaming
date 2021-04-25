/**
 * Component Imports
 */
import Routes from "./components/Routes";

import Providers from "./components/Providers";

/**
 * Displays the component
 */
const App: React.FC = () => {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
};

export default App;
