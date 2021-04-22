/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import MainTest, { MainTestProps } from "./MainTest";

export default {
  title: "Components/MainTest",
  component: MainTest,
} as Meta;

/**
 * Defines the Template
 * @param args MainTestProps
 * @returns
 */
const Template: Story<MainTestProps> = (args) => <MainTest {...args} />;

/**
 * Default case
 */
export const Default = Template.bind({});
Default.args = {
  text: "Hello World",
};

/**
 * Secondary case
 */
export const Secondary = Template.bind({});
Secondary.args = {
  text: "Hello World 2",
};
