/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import FooterMinified, { FooterMinifiedProps } from "./FooterMinified";

export default {
  title: "Components/FooterMinified",
  component: FooterMinified,
} as Meta;

/**
 * Defines the Template
 * @param args FooterMinifiedProps
 * @returns
 */
const Template: Story<FooterMinifiedProps> = (args) => (
  <FooterMinified {...args} />
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
