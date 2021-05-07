/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 * @see https://www.robinwieruch.de/react-testing-library
 * @see https://www.smashingmagazine.com/2020/07/react-apps-testing-library/
 */

/**
 * Imports test utils
 */
import { render, userEvent, act } from "../../utils/test-utils";

/**
 * External Imports
 */
import pretty from "pretty";

/**
 * Imports component
 */
import FooterDefault from "./FooterDefault";

/**
 * FooterDefault rendering tests
 */
describe("FooterDefault Rendering Tests", () => {
  it("renders the component without errors", () => {
    const minifyFooter = jest.fn();
    render(<FooterDefault minifyFooter={minifyFooter} />);
  });

  it("renders with the menu items not expanded", () => {
    const minifyFooter = jest.fn();
    const { getByTestId } = render(
      <FooterDefault minifyFooter={minifyFooter} />
    );

    expect(getByTestId("expand-list-button")).toBeInTheDocument();
  });
});

/**
 * FooterDefault logic tests
 */
describe("FooterDefault Logic Tests", () => {
  it("unmounts when clicking on the minify button", async () => {
    jest.useFakeTimers();

    /**
     * Mock the minify footer function
     */
    const minifyFooter = jest.fn();

    /**
     * Renders the component
     */
    const { getByTestId } = render(
      <FooterDefault minifyFooter={minifyFooter} />
    );

    /**
     * Gets the base class list (without any animation)
     */
    const { classList: baseClassList } = getByTestId("footer-default");
    expect(baseClassList.toString().includes("appBarEnter")).toBe(false);

    act(() => {
      jest.advanceTimersByTime(50);
    });

    /**
     * Gets the default class list (animation should have entered by now)
     */
    const { classList: defaultClassList } = getByTestId("footer-default");

    expect(defaultClassList.toString().includes("appBarEnter")).toBe(true);

    /**
     * Trigger the minify button
     */
    userEvent.click(getByTestId("minify-button"));

    act(() => {
      jest.advanceTimersByTime(500);
    });

    /**
     * Gets the final class list (the footer should be in the minifying state)
     */
    const { classList: finalClassList } = getByTestId("footer-default");

    expect(finalClassList.toString().includes("appBarMinified")).toBe(true);
    expect(minifyFooter).toHaveBeenCalledTimes(1);
  });

  it("expands the list with menu items in the middle", () => {
    jest.useFakeTimers();

    const minifyFooter = jest.fn();
    const { getByTestId } = render(
      <FooterDefault minifyFooter={minifyFooter} />
    );

    expect(getByTestId("expand-list-button")).toBeInTheDocument();

    userEvent.click(getByTestId("expand-list-button"));
    expect(getByTestId("shrink-list-button")).toBeInTheDocument();

    userEvent.click(getByTestId("shrink-list-button"));
    act(() => {
      jest.advanceTimersByTime(250);
    });

    expect(getByTestId("expand-list-button")).toBeInTheDocument();
  });
});

/**
 * FooterDefault snapshot test
 */
describe("FooterDefault Snapshot Test", () => {
  it("passes the snapshot test", () => {
    const minifyFooter = jest.fn();
    const { container } = render(<FooterDefault minifyFooter={minifyFooter} />);

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
