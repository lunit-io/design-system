import React from "react";
import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chip from "@/components/Chip/Chip";

import type { ChipProps } from "@/components/Chip/Chip.types";

export default {
  title: "Components/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args: ChipProps) => (
  /**
   * TODO
   * Since Color Token system will be changed, below className should be changed accordingly
   */
  <Box className="base00">
    <Chip {...args} />
  </Box>
);

export const LunitChip = Template.bind({});
LunitChip.parameters = {
  /**
   * TODO
   * Below code is just an example before color system is completed
   * Background colors are set by the rule of Figma's color token
   */
  backgrounds: {
    default: "Light1",
    values: [
      {
        name: "Light1",
        value: "#FFFFFF",
      },
      {
        name: "Dark1",
        value: "#111113",
      },
    ],
  },
};
