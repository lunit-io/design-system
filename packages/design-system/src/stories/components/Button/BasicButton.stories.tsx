import React from "react";
import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "@/components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    pseudo: {
      hover: ["#hover"],
    },
  },
  decorators: [
    /**
     * TODO
     * Since Color Token system will be changed, below className should be changed accordingly
     * Also, the hover color will be set again with the color token system completion
     */
    (Story) => <Box className="base90">{Story()}</Box>,
  ],
} as ComponentMeta<typeof Button>;

export const BasicButton: ComponentStory<typeof Button> = (arg) => (
  <Button {...arg}>Text</Button>
);
