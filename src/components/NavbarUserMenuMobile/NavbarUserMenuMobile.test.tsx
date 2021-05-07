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
import NavbarUserMenuMobile from "./NavbarUserMenuMobile";

/**
 * NavbarUserMenuMobile rendering tests
 */
describe("NavbarUserMenuMobile Rendering Tests", () => {
  it("renders the component without errors", () => {
    const closeDrawer = jest.fn();
    render(<NavbarUserMenuMobile close={closeDrawer} />);
  });
});

/**
 * NavbarUserMenuMobile logic tests
 */
describe("NavbarUserMenuMobile Logic Tests", () => {
  it("takes the user to the home page when clicked", () => {
    const closeDrawer = jest.fn();
    const { getByText } = render(<NavbarUserMenuMobile close={closeDrawer} />);

    fireEvent.click(getByText(global.en_en["home"]));
    expect(mockHistoryPush).toHaveBeenCalledWith("/");
    expect(closeDrawer).toHaveBeenCalled();

    fireEvent.click(getByText(global.en_en["news"]));
    expect(mockHistoryPush).toHaveBeenCalledWith("/news");
    expect(closeDrawer).toHaveBeenCalled();

    fireEvent.click(getByText(global.en_en["about"]));
    expect(mockHistoryPush).toHaveBeenCalledWith("/about");
    expect(closeDrawer).toHaveBeenCalled();

    fireEvent.click(getByText(global.en_en["contact"]));
    expect(mockHistoryPush).toHaveBeenCalledWith("/contact");
    expect(closeDrawer).toHaveBeenCalled();

    expect(mockHistoryPush).toHaveBeenCalledTimes(4);
    expect(closeDrawer).toHaveBeenCalledTimes(4);
  });
});

/**
 * NavbarUserMenuMobile snapshot test
 */
describe("NavbarUserMenuMobile Snapshot Test", () => {
  it("passes the snapshot test", () => {
    const closeDrawer = jest.fn();
    const { container } = render(<NavbarUserMenuMobile close={closeDrawer} />);

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
