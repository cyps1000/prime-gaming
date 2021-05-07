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
import ThemeSwitcher from "./ThemeSwitcher";

/**
 * ThemeSwitcher rendering tests
 */
describe("ThemeSwitcher Rendering Tests", () => {
  it("renders the component without errors", () => {
    render(<ThemeSwitcher />);
  });
});

/**
 * ThemeSwitcher logic tests
 */
describe("ThemeSwitcher Logic Tests", () => {
  it("changes the theme of the app when switching", () => {
    const { getByRole } = render(<ThemeSwitcher />);

    expect(getByRole("checkbox")).toHaveProperty("value", "dark-theme");
    expect(getByRole("checkbox")).toHaveProperty("checked", true);

    getByRole("checkbox").click();

    expect(getByRole("checkbox")).toHaveProperty("value", "light-theme");
    expect(getByRole("checkbox")).toHaveProperty("checked", false);

    getByRole("checkbox").click();

    expect(getByRole("checkbox")).toHaveProperty("value", "dark-theme");
    expect(getByRole("checkbox")).toHaveProperty("checked", true);
  });
});

/**
 * ThemeSwitcher snapshot test
 */
describe("ThemeSwitcher Snapshot Test", () => {
  it("passes the snapshot test", () => {
    const { container } = render(<ThemeSwitcher />);

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
