/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 */
import { render } from "@testing-library/react";

/**
 * Imports component
 */
import PrimeButton from "./PrimeButton";

/**
 * Default test
 */
describe("PrimeButton", () => {
  test("renders PrimeButton", () => {
    render(<PrimeButton />);
  });
});