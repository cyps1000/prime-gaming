// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

/**
 * Testing Helpers
 */
import mediaQuery from "css-mediaquery";

/**
 * Imports i18n
 */
import i18n from "./i18n";

/**
 * Imports translations
 */
import { LanguageResource, en_en, en_ro } from "./translations";

/**
 * Imports test utils
 */
import { mockHistoryPush, changeViewport } from "./utils/test-utils";

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
    interface Window {
      matchMedia: (query: any) => any;
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
 * Runs before any tests
 */
beforeAll(() => {
  /**
   * Defines the matchMedia property on the window
   * Used to determine if the document matches the media query string,
   * as well as to monitor the document to detect when it matches (or stops matching) that media query.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
   */
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: mediaQuery.match(query, { width: window.innerWidth }),
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  /**
   * Allows us to directly manipulate the innerWidth property on the window
   * By default, this is a read-only operation
   */
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: 1920,
  });
});

/**
 * Runs before each test
 */
beforeEach(() => {
  /**
   * Initializes the viewport to desktop
   */
  window.matchMedia = changeViewport("xl");
});

/**
 * Runs after each test
 */
afterEach(() => {
  /**
   * Resets the state of all mocks.
   * @see https://jestjs.io/docs/jest-object
   */
  jest.resetAllMocks();
});

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
