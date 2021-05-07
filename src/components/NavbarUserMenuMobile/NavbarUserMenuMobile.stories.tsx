/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import NavbarUserMenuMobile, { NavbarUserMenuMobileProps } from "./NavbarUserMenuMobile";

export default {
  title: "Components/NavbarUserMenuMobile",
  component: NavbarUserMenuMobile,
} as Meta;

/**
 * Defines the Template
 * @param args NavbarUserMenuMobileProps
 * @returns
 */
const Template: Story<NavbarUserMenuMobileProps> = (args) => (
  <NavbarUserMenuMobile {...args} />
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
