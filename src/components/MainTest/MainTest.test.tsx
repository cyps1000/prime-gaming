/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 * @see https://www.robinwieruch.de/react-testing-library
 */
import { render } from "@testing-library/react";

/**
 * Imports component
 */
import MainTest from "./MainTest";

/**
 * Default test
 */
describe("MainTest", () => {
  test("renders MainTest", () => {
    render(<MainTest text="Hello World" />);
  });
});
