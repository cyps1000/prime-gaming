/**
 * External imports
 */
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { darkTheme } from "../../themes/dark-theme";
//import { lightTheme } from "../../themes/light-theme";

/**
 * Import redux store
 */
import { store } from "../../redux";

/**
 * Displays the component
 */
const Providers: React.FC = (props) => {
  const { children } = props;

  const getTheme = () => {
    return createMuiTheme(darkTheme);
  };

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>
    </ReduxProvider>
  );
};

export default Providers;
