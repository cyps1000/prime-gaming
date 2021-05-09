/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import RegisterModal, { RegisterModalProps } from "./RegisterModal";

export default {
  title: "Components/RegisterModal",
  component: RegisterModal,
} as Meta;

/**
 * Defines the Template
 * @param args RegisterModalProps
 * @returns
 */
const Template: Story<RegisterModalProps> = (args) => (
  <RegisterModal {...args} />
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
