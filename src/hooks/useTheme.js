import React, { useContext, createContext } from "react";
import PropTypes from "prop-types";

/**
 * Hooks
 */
import { useLocalStorage } from "./index";

/**
 * Defines the prop types
 */
const propTypes = {
  themeKey: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  themeKey: "dark-theme",
};

/**
 * Provides the state of the modal
 * By default it will be open
 */
const useThemeHook = (props) => {
  const { themeKey: defaultThemeKey } = defaultProps;

  /**
   * Sets the theme
   */
  const [activeTheme, setActiveTheme] = useLocalStorage(
    "activeTheme",
    defaultThemeKey
  );

  // console.log('activeTheme:', activeTheme)

  /**
   * Handles changing the theme key
   * @param {String} themeKey
   */
  const changeTheme = (themeKey) => setActiveTheme(themeKey);

  return {
    changeTheme,
    activeTheme,
  };
};

/**
 * Sets the prop types
 */
useThemeHook.propTypes = propTypes;

/**
 * Defines a context where the completion state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
const themeContext = createContext();

/**
 * Provides a top level wrapper with the context
 *
 * - This is the main provider
 * - It makes the object available to any child component that calls the hook.
 */
const ThemeProvider = (props) => {
  const { children } = props;

  const data = useThemeHook();

  return (
    <themeContext.Provider value={{ ...data }}>
      {children}
    </themeContext.Provider>
  );
};

/**
 * Defines the main hook
 *
 * - Returns the  context / object
 * - To be used inside components
 */
const useTheme = () => {
  return useContext(themeContext);
};

export { useTheme, ThemeProvider };
