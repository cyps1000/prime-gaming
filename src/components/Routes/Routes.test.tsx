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
import Routes from "./Routes";

/**
 * Routes rendering tests
 */
describe("Routes Rendering Tests", () => {
  it("renders the component without errors", () => {
    render(<Routes />);
  });
});

/**
 * Routes snapshot test
 */
describe("Routes Snapshot Test", () => {
  it("passes the snapshot test", () => {
    const { container } = render(<Routes />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it("has a default className", () => {
    const { getByTestId } = render(<Routes />);
    expect(getByTestId("router-grid")).toHaveAttribute("class");
  });
});
