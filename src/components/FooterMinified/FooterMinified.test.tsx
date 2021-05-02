/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 * @see https://www.robinwieruch.de/react-testing-library
 * @see https://www.smashingmagazine.com/2020/07/react-apps-testing-library/
 */

/**
 * Imports test utils
 */
import { render, userEvent, act } from "../../utils/test-utils";

/**
 * External Imports
 */
import pretty from "pretty";

/**
 * Imports component
 */
import FooterMinified from "./FooterMinified";

/**
 * FooterMinified rendering tests
 */
describe("FooterMinified Rendering Tests", () => {
  it("renders the component without errors", () => {
    const expandFooter = jest.fn();
    render(<FooterMinified expandFooter={expandFooter} />);
  });
});

/**
 * FooterMinified logic tests
 */
describe("FooterMinified Logic Tests", () => {
  it("triggers the expand footer on click", () => {
    /**
     * Mock the minify footer function
     */
    const expandFooter = jest.fn();

    /**
     * Renders the component
     */
    const { getByTestId } = render(
      <FooterMinified expandFooter={expandFooter} />
    );

    /**
     * Gets the base class list (without any animation)
     */
    expect(getByTestId("footer-minified")).toBeInTheDocument();

    /**
     * Trigger the expand button
     */
    userEvent.click(getByTestId("expand-button"));

    expect(expandFooter).toHaveBeenCalledTimes(1);
  });
});

/**
 * FooterMinified snapshot test
 */
describe("FooterMinified Snapshot Test", () => {
  it("passes the snapshot test", () => {
    const expandFooter = jest.fn();
    const { container } = render(
      <FooterMinified expandFooter={expandFooter} />
    );

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
