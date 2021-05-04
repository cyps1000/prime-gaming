/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 * @see https://www.robinwieruch.de/react-testing-library
 * @see https://www.smashingmagazine.com/2020/07/react-apps-testing-library/
 */

/**
 * Imports test utils
 */
import { render, userEvent } from "../../utils/test-utils";

/**
 * External Imports
 */
import pretty from "pretty";

/**
 * Imports component
 */
import Footer from "./Footer";

/**
 * Footer rendering tests
 */
describe("Footer Rendering Tests", () => {
  it("renders the component without errors", () => {
    render(<Footer />);
  });
});

/**
 * Footer logic tests
 */
describe("Footer Logic Tests", () => {
  it("renders the FooterDefault component by default", () => {
    const { getByText, getByTestId } = render(<Footer />);

    expect(getByText(/© 2021 Prime Gaming/i)).toBeInTheDocument();
    expect(getByTestId("footer-default")).not.toEqual(null);
  });

  it("renders the FooterMinified component when clicking on the minify button", async () => {
    const { getByTestId, findByTestId } = render(<Footer />);

    userEvent.click(getByTestId("minify-button"));
    await findByTestId("footer-minified");

    expect(getByTestId("footer-minified")).toBeInTheDocument();
    expect(() => getByTestId("footer-default")).toThrow();
  });
});

/**
 * Footer snapshot test
 */
describe("Footer Snapshot Test", () => {
  it("passes the snapshot test", () => {
    const { container } = render(<Footer />);

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
