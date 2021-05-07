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
import NavbarSearchForm from "./NavbarSearchForm";

/**
 * NavbarSearchForm rendering tests
 */
describe("NavbarSearchForm Rendering Tests", () => {
  it("renders the component without errors", () => {
    render(<NavbarSearchForm />);
  });

  it("renders the component without the expand animation", () => {
    render(<NavbarSearchForm withExpandAnimation={false} />);
  });

  it("has a default className", () => {
    const { container } = render(<NavbarSearchForm />);
    expect(container.firstChild).toHaveAttribute("class");
  });
});

/**
 * NavbarSearchForm snapshot testu
 */
describe("NavbarSearchForm Snapshot Test", () => {
  it("passes the snapshot test", () => {
    const { container } = render(<NavbarSearchForm />);

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
