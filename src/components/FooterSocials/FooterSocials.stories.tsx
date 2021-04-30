/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import FooterSocials from "./FooterSocials";

export default {
  title: "Components/FooterSocials",
  component: FooterSocials,
} as Meta;

/**
 * Defines the Template
 * @param args FooterSocialsProps
 * @returns
 */
const Template: Story = (args) => <FooterSocials {...args} />;

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
