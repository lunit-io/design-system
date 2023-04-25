import { Meta } from "@storybook/react";
import TokenPaletteTable from "./TokenPaletteTable";

export default {
  title: "Foundation/Colors",
  component: TokenPaletteTable,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} as Meta<typeof TokenPaletteTable>;

export const CoreTokens = {
  args: {
    kind: "core",
  },

  name: "Palette: Core Tokens",
};

export const ComponentTokens = {
  args: {
    kind: "component",
  },

  name: "Palette: Component Tokens",
};
