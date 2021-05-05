/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import RegisterBlock, { RegisterBlockProps } from "./RegisterBlock";

export default {
  title: "Components/RegisterBlock",
  component: RegisterBlock,
} as Meta;

/**
 * Defines the Template
 * @param args RegisterBlockProps
 * @returns
 */
const Template: Story<RegisterBlockProps> = (args) => (
  <RegisterBlock {...args} />
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
