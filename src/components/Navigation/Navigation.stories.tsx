/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import Navigation, { NavigationProps } from "./Navigation";

export default {
  title: "Components/Navigation",
  component: Navigation,
} as Meta;

/**
 * Defines the Template
 * @param args NavigationProps
 * @returns
 */
const Template: Story<NavigationProps> = (args) => <Navigation {...args} />;

/**
 * Default case
 */
export const Default = Template.bind({});
Default.args = {};
