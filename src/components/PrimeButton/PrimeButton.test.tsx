/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 */
import { render } from "@testing-library/react";

/**
 * Imports component
 */
import PrimeButton from "./PrimeButton";

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
describe("PrimeButton", () => {
  test("renders PrimeButton", () => {
    //render(<PrimeButton text="asdas" variant="text" />);
  });
});
