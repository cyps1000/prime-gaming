/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import NavbarUserMenu from "./NavbarUserMenu";

export default {
  title: "Components/NavbarUserMenu",
  component: NavbarUserMenu,
} as Meta;

/**
 * Defines the Template
 * @param args NavbarUserMenuProps
 * @returns
 */
const Template: Story = (args) => (
  <NavbarUserMenu
    openSignUpModal={() => {}}
    openSignInModal={() => {}}
    {...args}
  />
);

/**
 * Default case
 */
export const Default = Template.bind({});

/**
 * Put your component props in here
 *
 * Example:
 * Default.args = {
 *  text: "Hello World"
 * }
 *
 * Assuming that the component expects a prop text that is a string.
 */
Default.args = {};
