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
import Banner from "./Banner";

/**
 * Default test
 */
describe("Banner Rendering Tests", () => {
  it("Renders the component without errors", () => {
    render(<Banner />);
  });
});

/**
 * Banner snapshot test
 */
describe("Banner Snapshot Test", () => {
  it("Passes the snapshot test", () => {
    const { container } = render(<Banner />);

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
