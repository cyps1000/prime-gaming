/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import PrimeButton, { PrimeButtonProps } from "./PrimeButton";

export default {
  title: "Components/PrimeButton",
  component: PrimeButton,
} as Meta;

/**
 * Defines the Template
 * @param args PrimeButtonProps
 * @returns
 */
const Template: Story<PrimeButtonProps> = (args) => <PrimeButton {...args} />;

/**
 * Default case
 */
export const Default = Template.bind({});
Default.args = {
  text: "Button",
};
