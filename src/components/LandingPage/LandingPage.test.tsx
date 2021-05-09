/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 * @see https://www.robinwieruch.de/react-testing-library
 */
import { render } from "@testing-library/react";

/**
 * External Imports
 */
import pretty from "pretty";

/**
 * Imports component
 */
import LandingPage from "./LandingPage";

/**
 * Default test
 */
describe("LandingPage Rendering Tests", () => {
  it("Renders the component without errors", () => {
    render(<LandingPage />);
  });
});

/**
 * LandingPage snapshot test
 */
describe("LandingPage Snapshot Test", () => {
  it("Passes the snapshot test", () => {
    const { container } = render(<LandingPage />);

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
