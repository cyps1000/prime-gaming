/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 * @see https://www.robinwieruch.de/react-testing-library
 */
import { render } from "@testing-library/react";

/**
 * Imports component
 */
import LandingPage from "./LandingPage";

/**
 * Mocking the useTranslation hook
 * @see https://github.com/i18next/react-i18next/issues/876
 *
 */
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

/**
 * Default test
 */
describe("LandingPage", () => {
  it("renders the component", () => {
    // render(<LandingPage />);
  });
});
