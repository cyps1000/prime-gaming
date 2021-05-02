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
import Logo from "./Logo";

/**
 * Logo rendering tests
 */
describe("Logo Rendering Tests", () => {
  it("renders the component without errors", () => {
    render(<Logo />);
  });

  it("renders an image with an alt of Logo", () => {
    const { getByAltText } = render(<Logo />);
    expect(getByAltText(/logo/i)).toBeInTheDocument();
  });

  it("has a default className", () => {
    const { container } = render(<Logo />);
    expect(container.firstChild).toHaveAttribute("class");
  });

  it("accepts a className prop and it adds it to the img tag", () => {
    const { container } = render(<Logo className="custom-logo" />);
    expect(container.firstChild).toHaveClass("custom-logo");
  });
});

/**
 * Logo logic tests
 */
describe("Logo Logic Tests", () => {
  it("takes the user to the home page when clicked", () => {
    const { getByAltText } = render(<Logo />);

    /**
     * Clicks on the logo
     */
    fireEvent.click(getByAltText("logo"));

    expect(mockHistoryPush).toHaveBeenCalledWith("/");
  });
});

/**
 * Logo snapshot test
 */
describe("Logo Snapshot Test", () => {
  it("passes the snapshot test", () => {
    const { container } = render(<Logo />);

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
