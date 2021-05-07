/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import LanguageSwitcher, { LanguageSwitcherProps } from "./LanguageSwitcher";

export default {
  title: "Components/LanguageSwitcher",
  component: LanguageSwitcher,
} as Meta;

/**
 * Defines the Template
 * @param args LanguageSwitcherProps
 * @returns
 */
const Template: Story<LanguageSwitcherProps> = (args) => (
  <LanguageSwitcher {...args} />
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
