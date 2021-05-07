/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import LoginBlock, { LoginBlockProps } from "./LoginBlock";

export default {
  title: "Components/LoginBlock",
  component: LoginBlock,
} as Meta;

/**
 * Defines the Template
 * @param args LoginBlockProps
 * @returns
 */
const Template: Story<LoginBlockProps> = (args) => (
  <LoginBlock {...args} />
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
