/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import ThemeSwitcher, { ThemeSwitcherProps } from "./ThemeSwitcher";

export default {
  title: "Components/ThemeSwitcher",
  component: ThemeSwitcher,
} as Meta;

/**
 * Defines the Template
 * @param args ThemeSwitcherProps
 * @returns
 */
const Template: Story<ThemeSwitcherProps> = (args) => (
  <ThemeSwitcher {...args} />
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
