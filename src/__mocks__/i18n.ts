import i18n, { i18n as i18nType, ThirdPartyModule } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

/**
 * Imports translations
 */
import { en_en } from "../translations/en_en";
import { en_ro } from "../translations/en_ro";

/**
 *  Defines the resources
 */
const resources = {
  en_en: {
    translation: en_en,
  },
  en_ro: {
    translation: en_ro,
  },
};

/**
 * Mocks the init react-i18next
 */
const mockInitReactI18next: ThirdPartyModule = {
  type: "3rdParty",
  init: (i18next: i18nType) => {},
};

/**
 * Sets up i18next
 *
 * @see https://react.i18next.com/latest/using-with-hooks
 */
i18n
  /**
   * Detects user language
   *
   * @see https://github.com/i18next/i18next-browser-languageDetector
   */
  .use(LanguageDetector)
  .use(mockInitReactI18next)
  /**
   * Inits i18next
   *
   * @see https://www.i18next.com/overview/configuration-options
   */
  .init({
    resources,
    lng: localStorage.getItem("i18nextLng") || "en_en",
    keySeparator: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
