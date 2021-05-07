/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 * @see https://www.robinwieruch.de/react-testing-library
 * @see https://www.smashingmagazine.com/2020/07/react-apps-testing-library/
 */

/**
 * Imports test utils
 */
import { render, fireEvent } from "../../utils/test-utils";
import i18n from "../../i18n";

/**
 * External Imports
 */
import pretty from "pretty";

/**
 * Imports component
 */
import LanguageSwitcher from "./LanguageSwitcher";

/**
 * LanguageSwitcher rendering tests
 */
describe("LanguageSwitcher Rendering Tests", () => {
  it("renders the component without errors", () => {
    render(<LanguageSwitcher />);
  });
});

/**
 * LanguageSwitcher logic tests
 */
describe("LanguageSwitcher Logic Tests", () => {
  it("changes the language of the app when switching", () => {
    const { getByRole } = render(<LanguageSwitcher />);

    expect(i18n.language).toEqual("en_en");

    getByRole("checkbox").click();

    expect(i18n.language).toEqual("en_ro");
    getByRole("checkbox").click();

    expect(i18n.language).toEqual("en_en");
  });
});

/**
 * LanguageSwitcher snapshot test
 */
describe("LanguageSwitcher Snapshot Test", () => {
  it("passes the snapshot test", () => {
    const { container } = render(<LanguageSwitcher />);

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
