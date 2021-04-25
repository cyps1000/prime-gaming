/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import Main, { MainProps } from "./Main";

export default {
  title: "Components/Main",
  component: Main,
} as Meta;

/**
 * Defines the Template
 * @param args MainProps
 * @returns
 */
const Template: Story<MainProps> = (args) => <Main {...args} />;

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
