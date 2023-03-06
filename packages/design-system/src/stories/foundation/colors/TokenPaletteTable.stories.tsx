import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TokenPaletteTable from "./TokenPaletteTable";

export default {
  title: "Foundation/Colors",
  component: TokenPaletteTable,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} as ComponentMeta<typeof TokenPaletteTable>;

const Template: ComponentStory<typeof TokenPaletteTable> = (args) => (
  <TokenPaletteTable {...args} />
);

export const CoreTokens = Template.bind({});
CoreTokens.args = {
  token: "core",
};
CoreTokens.storyName = "Palette: Core Tokens";

export const ComponentTokens = Template.bind({});
ComponentTokens.args = {
  token: "component",
};
ComponentTokens.storyName = "Palette: Component Tokens";
