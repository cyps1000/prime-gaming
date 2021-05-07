/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import LandingPage from "./LandingPage";

export default {
  title: "Components/LandingPage",
  component: LandingPage,
} as Meta;

/**
 * Defines the Template
 * @param args LandingPageProps
 * @returns
 */
const Template: Story = (args) => <LandingPage {...args} />;

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
