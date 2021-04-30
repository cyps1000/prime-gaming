/**
 * External imports
 */
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { roRO, enUS } from "@material-ui/core/locale";

/**
 * Imports themes
 */
import { darkTheme } from "../../themes/dark-theme";
import { lightTheme } from "../../themes/light-theme";

/**
 * Imports Hooks
 */
import { useTheme, useLanguage } from "../../hooks";

/**
 * Import redux store
 */
import { store } from "../../redux";

/**
 * Displays the component
 */
const Providers: React.FC = (props) => {
  const { children } = props;

  /**
   * Gets the active theme
   */
  const { activeTheme } = useTheme();

  /**
   * Gets the active language
   */
  const { activeLanguage } = useLanguage();

  /**
   * Handles getting the theme data
   */
  const getTheme = () => {
    let language = enUS;
    let theme = darkTheme;

    if (activeLanguage === "en_en") language = enUS;
    if (activeLanguage === "en_ro") language = roRO;

    switch (true) {
      case activeTheme === "light-theme":
        theme = lightTheme;
        break;
      default:
        theme = darkTheme;
    }

    return createMuiTheme(theme, language);
  };

  return (
    <ThemeProvider
      key={`${activeLanguage}_top_level_${activeTheme}`}
      theme={getTheme()}
    >
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </ThemeProvider>
  );
};

export default Providers;
