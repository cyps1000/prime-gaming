/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import Banner, { BannerProps } from "./Banner";

export default {
  title: "Components/Banner",
  component: Banner,
} as Meta;

/**
 * Defines the Template
 * @param args BannerProps
 * @returns
 */
const Template: Story<BannerProps> = (args) => (
  <Banner {...args} />
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
