import React from "react";
import { Box } from "@mui/material";
import { Checkbox } from "@/components/SelectControl/Checkbox";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: [
    /**
     * TODO
     * Since Color Token system will be changed, below className should be changed accordingly
     * Also, the hover color will be set again with the color token system completion
     */
    (Story) => <Box className="base90">{Story()}</Box>,
  ],
} as ComponentMeta<typeof Checkbox>;

export const Primary = () => <Checkbox />;
