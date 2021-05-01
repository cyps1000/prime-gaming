// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

/**
 * Imports i18n
 */
import i18n from "./i18n";

/**
 * Imports translations
 */
import { LanguageResource, en_en, en_ro } from "./translations";

/**
 * Imports mocked functions
 */
import { mockHistoryPush } from "./utils/test-utils/mocks";

/**
 * Declares new global variables available to jest
 */
declare global {
  namespace NodeJS {
    interface Global {
      en_en: LanguageResource;
      en_ro: LanguageResource;
      activeLanguage: string;
    }
  }
}

/**
 * Defines the global variables
 */
global.en_en = en_en;
global.en_ro = en_ro;
global.activeLanguage = i18n.language;

/**
 * Mocks i18n
 * Where import i18n from "../i18n", will instead use
 * the i18n.ts from __mocks__ folder.
 */
jest.mock("./i18n.ts");
/**
 * Mocks the useTranslation hook
 * @see https://github.com/i18next/react-i18next/issues/876
 */
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const language =
        global.activeLanguage === "en_en" ? global.en_en : global.en_ro;
      return language[key];
    },
  }),
  initReactI18next: () => {},
}));

/**
 * Mocks react router dom
 */
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
