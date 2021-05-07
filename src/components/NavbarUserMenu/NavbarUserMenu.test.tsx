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
import NavbarUserMenu from "./NavbarUserMenu";

/**
 * NavbarUserMenu rendering tests
 */
describe("NavbarUserMenu Rendering Tests", () => {
  it("renders the component without errors", () => {
    render(<NavbarUserMenu />);
  });
});

/**
 * NavbarUserMenu logic tests
 */
describe("NavbarUserMenu Logic Tests", () => {
  it("takes the user to the home page when clicked", () => {
    const { getByText } = render(<NavbarUserMenu />);

    fireEvent.click(getByText(global.en_en["home"]));
    expect(mockHistoryPush).toHaveBeenCalledWith("/");

    fireEvent.click(getByText(global.en_en["news"]));
    expect(mockHistoryPush).toHaveBeenCalledWith("/news");

    fireEvent.click(getByText(global.en_en["about"]));
    expect(mockHistoryPush).toHaveBeenCalledWith("/about");

    fireEvent.click(getByText(global.en_en["contact"]));
    expect(mockHistoryPush).toHaveBeenCalledWith("/contact");

    expect(mockHistoryPush).toHaveBeenCalledTimes(4);
  });
});

/**
 * NavbarUserMenu snapshot test
 */
describe("NavbarUserMenu Snapshot Test", () => {
  it("passes the snapshot test", () => {
    const { container } = render(<NavbarUserMenu />);

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
