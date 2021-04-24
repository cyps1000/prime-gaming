/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import Footer, { FooterProps } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
} as Meta;

/**
 * Defines the Template
 * @param args FooterProps
 * @returns
 */
const Template: Story<FooterProps> = (args) => (
  <Footer {...args} />
);

/**
 * Default case
 */
export const Default = Template.bind({});
Default.args = {};
