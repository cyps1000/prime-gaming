/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import NavbarMobileFooter, { NavbarMobileFooterProps } from "./NavbarMobileFooter";

export default {
  title: "Components/NavbarMobileFooter",
  component: NavbarMobileFooter,
} as Meta;

/**
 * Defines the Template
 * @param args NavbarMobileFooterProps
 * @returns
 */
const Template: Story<NavbarMobileFooterProps> = (args) => (
  <NavbarMobileFooter {...args} />
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
