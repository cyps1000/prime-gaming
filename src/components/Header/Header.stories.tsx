/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import Header, { HeaderProps } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

/**
 * Defines the Template
 * @param args HeaderProps
 * @returns
 */
const Template: Story<HeaderProps> = (args) => <Header {...args} />;

/**
 * Default case
 */
export const Default = Template.bind({});
Default.args = {};
