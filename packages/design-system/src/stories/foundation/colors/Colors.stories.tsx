import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const Colors = () => {
  return null;
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  title: "Foundation/Colors",
  component: Colors,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Colors>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Colors> = () => <Colors />;

export const Main = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
  primary: true,
  label: "Hello World",
};
