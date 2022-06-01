import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HelloWorld } from "@/components/HelloWorld/HelloWorld";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  title: "Components/HelloWorld",
  component: HelloWorld,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof HelloWorld>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HelloWorld> = (args) => (
  <HelloWorld {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Hello World",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Hello World",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Hello World",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Hello World",
};
