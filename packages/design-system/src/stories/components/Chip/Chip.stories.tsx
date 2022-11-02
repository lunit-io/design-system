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
  <Box sx={{ margin: 10 }}>
    <Chip {...args} />
  </Box>
);

export const LunitChip = Template.bind({});
LunitChip.parameters = {
  /**
   * background colors are set by the rule of Figma's color token
   */
  backgrounds: {
    default: "base00",
    values: [
      {
        name: "base00",
        value: "#FFFFFF",
      },
      {
        name: "base10",
        value: "#FFFFFF",
      },
      {
        name: "base70",
        value: "#4E4E50",
      },
      {
        name: "base80",
        value: "#333336",
      },
      {
        name: "base85",
        value: "#2D2D2F",
      },
      {
        name: "base90",
        value: "#1F1F21",
      },
    ],
  },
};
