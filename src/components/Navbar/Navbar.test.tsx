/**
 * @see https://testing-library.com/docs/react-testing-library/intro
 * @see https://www.robinwieruch.de/react-testing-library
 * @see https://www.smashingmagazine.com/2020/07/react-apps-testing-library/
 */

/**
 * Imports test utils
 */
import {
  render,
  changeViewport,
  userEvent,
  waitFor,
} from "../../utils/test-utils";

/**
 * External Imports
 */
import pretty from "pretty";

/**
 * Imports component
 */
import Navbar from "./Navbar";

/**
 * Navbar rendering tests
 */
describe("Navbar Rendering Tests", () => {
  it("renders the component without errors", () => {
    render(<Navbar />);
  });

  it("renders the default navbar when the screen size is above tablet", () => {
    const { getByTestId, rerender, queryByTestId } = render(<Navbar />);

    expect(getByTestId("navbar")).toBeInTheDocument();
    expect(queryByTestId("navbar-mobile")).not.toBeInTheDocument();

    window.matchMedia = changeViewport("lg");

    rerender(<Navbar />);

    expect(getByTestId("navbar")).toBeInTheDocument();
    expect(queryByTestId("navbar-mobile")).not.toBeInTheDocument();
  });

  it("renders the mobile navbar when the screen size is tablet or bellow", () => {
    const { getByTestId, rerender, queryByTestId } = render(<Navbar />);

    expect(getByTestId("navbar")).toBeInTheDocument();
    expect(queryByTestId("navbar-mobile")).not.toBeInTheDocument();

    window.matchMedia = changeViewport("md");

    rerender(<Navbar />);

    expect(getByTestId("navbar-mobile")).toBeInTheDocument();
    expect(queryByTestId("navbar")).not.toBeInTheDocument();

    window.matchMedia = changeViewport("sm");

    rerender(<Navbar />);

    expect(getByTestId("navbar-mobile")).toBeInTheDocument();
    expect(queryByTestId("navbar")).not.toBeInTheDocument();

    window.matchMedia = changeViewport("xs");

    rerender(<Navbar />);

    expect(getByTestId("navbar-mobile")).toBeInTheDocument();
    expect(queryByTestId("navbar")).not.toBeInTheDocument();
  });
});

/**
 * Navbar logic tests
 */
describe("Navbar Logic Tests", () => {
  it("while on mobile/tablet view, triggers a drawer when clicking on the navbar menu component", async () => {
    window.matchMedia = changeViewport("md");
    const { getByTestId } = render(<Navbar />);

    userEvent.click(getByTestId("navbar-menu-button"));

    expect(getByTestId("navbar-list-container")).toBeInTheDocument();
  });
});

/**
 * Navbar snapshot test
 */
describe("Navbar Snapshot Test", () => {
  it("passes the snapshot test", () => {
    const { container } = render(<Navbar />);

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
