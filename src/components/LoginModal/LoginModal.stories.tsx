/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import LoginModal, { LoginModalProps } from "./LoginModal";

export default {
  title: "Components/LoginModal",
  component: LoginModal,
} as Meta;

/**
 * Defines the Template
 * @param args LoginModalProps
 * @returns
 */
const Template: Story<LoginModalProps> = (args) => <LoginModal {...args} />;

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
