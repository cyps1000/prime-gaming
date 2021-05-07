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
import FooterSocials from "./FooterSocials";

/**
 * FooterSocials rendering tests
 */
describe("FooterSocials Rendering Tests", () => {
  it("renders the component without errors", () => {
    render(<FooterSocials />);
  });

  it("has a default className", () => {
    const { container } = render(<FooterSocials />);
    expect(container.firstChild).toHaveAttribute("class");
  });

  it("has a 4 icon buttons", () => {
    const { container } = render(<FooterSocials />);
    expect(container.querySelectorAll("button").length).toBe(4);
  });
});

/**
 * FooterSocials snapshot test
 */
describe("FooterSocials Snapshot Test", () => {
  it("passes the snapshot test", () => {
    const { container } = render(<FooterSocials />);

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
