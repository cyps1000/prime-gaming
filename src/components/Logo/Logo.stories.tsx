/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import Logo, { LogoProps } from "./Logo";

export default {
  title: "Components/Logo",
  component: Logo,
} as Meta;

/**
 * Defines the Template
 * @param args LogoProps
 * @returns
 */
const Template: Story<LogoProps> = (args) => (
  <Logo {...args} />
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
