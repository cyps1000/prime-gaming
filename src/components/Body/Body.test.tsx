/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 * @see https://www.robinwieruch.de/react-testing-library
 * @see https://www.smashingmagazine.com/2020/07/react-apps-testing-library/
 */

/**
 * Imports test utils
 */
import { render, fireEvent } from "../../utils/test-utils";
import { mockHistoryPush } from "../../utils/test-utils/mocks";

/**
 * External Imports
 */
import pretty from "pretty";

/**
 * Imports component
 */
import Body from "./Body";

/**
 * Body rendering tests
 */
describe("Body Rendering Tests", () => {
  it("renders the component without errors", () => {
    const { getByText } = render(<Body>Children</Body>);
    expect(getByText("Children")).toBeInTheDocument();
  });
});

/**
 * Body snapshot test
 */
describe("Body Snapshot Test", () => {
  it("passes the snapshot test", () => {
    const { container, getByText } = render(<Body>Children</Body>);
    expect(getByText("Children")).toBeInTheDocument();
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it("has a default className", () => {
    const { container, getByText } = render(<Body> Children </Body>);
    expect(container.firstChild).toHaveAttribute("class");
    expect(getByText("Children")).toBeInTheDocument();
  });
});
