/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 */
import { render } from "@testing-library/react";

/**
 * Imports component
 */
import MainTest from "./MainTest";

/**
 * Default test
 */
it("has a MainTest component", () => {
  const { getByText } = render(<MainTest text="MainTest" />);
  expect(getByText("MainTest")).toBeInTheDocument();
});
