/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 * @see https://www.robinwieruch.de/react-testing-library
 * @see https://www.smashingmagazine.com/2020/07/react-apps-testing-library/
 */

/**
 * Imports test utils
 */
import { render } from "../../utils/test-utils";

/**
 * External Imports
 */
import pretty from "pretty";

/**
 * Imports component
 */
import Main from "./Main";

/**
 * Main rendering tests
 */
describe("Main Rendering Tests", () => {
  it("renders the component without errors", () => {
    render(<Main />);
  });

  it("has a default text prop of 'Main'", () => {
    const { getByText } = render(<Main />);
    expect(getByText(/Main/i)).toBeInTheDocument();
  });

  it("has a default className", () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveAttribute("class");
  });

  it("renders an h1 based on the text prop", () => {
    const { getByText } = render(<Main text="Hello World" />);
    expect(getByText(/Hello World/i)).toBeInTheDocument();
  });
});

/**
 * Main snapshot test
 */
describe("Main Snapshot Test", () => {
  it("passes the snapshot test", () => {
    const { container } = render(<Main />);

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
