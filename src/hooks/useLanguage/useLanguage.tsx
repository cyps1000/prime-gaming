import { useState, useContext, createContext, ReactNode } from "react";

/**
 * Imports i18n
 */
import i18n from "../../i18n";

/**
 * Provides the state of the modal
 * By default it will be open
 */
const useLanguageHook = () => {
  /**
   * Sets the active language
   */
  const [activeLanguage, setActiveLanguage] = useState(
    localStorage.getItem("i18nextLng") || i18n.language
  );

  /**
   * Handles changing the languageKey key
   * @param {String} languageKey
   */
  const changeLanguage = (languageKey: string) => {
    setActiveLanguage(languageKey);
    i18n.changeLanguage(languageKey);
  };

  return {
    changeLanguage,
    activeLanguage,
  };
};

/**
 * Defines a context where the completion state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
const themeContext = createContext({
  activeLanguage: "",
  changeLanguage: (languageKey: string) => {},
});

type LanguageProviderType = (props: { children?: ReactNode }) => any;

/**
 * Provides a top level wrapper with the context
 *
 * - This is the main provider
 * - It makes the object available to any child component that calls the hook.
 */
const LanguageProvider: LanguageProviderType = (props) => {
  const { children } = props;

  const data = useLanguageHook();

  return (
    <themeContext.Provider value={{ ...data }}>
      {children}
    </themeContext.Provider>
  );
};

/**
 * Defines the UseLanguageHook type
 */
type UseLanguageHook = () => {
  activeLanguage: string;
  changeLanguage: (languageKey: string) => void;
};

/**
 * Defines the main hook
 *
 * - Returns the  context / object
 * - To be used inside components
 */
const useLanguage: UseLanguageHook = () => {
  return useContext(themeContext);
};

export { useLanguage, LanguageProvider };
