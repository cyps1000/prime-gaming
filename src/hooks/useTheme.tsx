import { useContext, createContext, ReactNode } from "react";

/**
 * Hooks
 */
import useLocalStorage from "./useLocalStorage/useLocalStorage";

/**
 * Defines the default props
 */
const defaultProps = {
  themeKey: "dark-theme",
};

/**
 * Defines the useThemeHookProps interface
 */
interface useThemeHookProps {
  themeKey?: string;
}

/**
 * Provides the state of the modal
 * By default it will be open
 */
const useThemeHook = (props: useThemeHookProps) => {
  const { themeKey } = props;

  /**
   * Sets the theme
   */
  const [activeTheme, setActiveTheme] = useLocalStorage(
    "activeTheme",
    themeKey ? themeKey : defaultProps.themeKey
  );

  /**
   * Handles changing the theme key
   * @param {String} themeKey
   */
  const changeTheme = (themeKey: string) => setActiveTheme(themeKey);

  return {
    changeTheme,
    activeTheme,
  };
};

/**
 * Defines a context where the completion state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
const themeContext = createContext({
  activeTheme: "",
  changeTheme: (themeKey: string) => {},
});

type ThemeProviderType = (props: { children?: ReactNode }) => any;

/**
 * Provides a top level wrapper with the context
 *
 * - This is the main provider
 * - It makes the object available to any child component that calls the hook.
 */
const ThemeProvider: ThemeProviderType = (props) => {
  const { children } = props;

  const data = useThemeHook({});

  return (
    <themeContext.Provider value={{ ...data }}>
      {children}
    </themeContext.Provider>
  );
};

type useThemeHook = () => {
  activeTheme: string;
  changeTheme: (themeKey: string) => void;
};

/**
 * Defines the main hook
 *
 * - Returns the  context / object
 * - To be used inside components
 */
const useTheme: useThemeHook = () => {
  return useContext(themeContext);
};

export { useTheme, ThemeProvider };
