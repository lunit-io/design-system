import React from "react";
import { Box } from "@mui/material";
import { Error } from "@lunit/design-system-icons";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chip from "@/components/Chip/Chip";

export default {
  title: "Components/Chips",
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: `Chips are compact elements that represent an input, attribute, or action.
        see [Material-UI Chip](https://mui.com/components/chips/)`,
      },
    },
    /**
     * Todo
     * below background color is a temporary solution for showing the color code
     * after the color system is updated, it will be removed
     */
    backgrounds: {
      default: "Dark1",
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
  },
  decorators: [
    /**
     * TODO
     * Since Color Token system will be changed, below className should be changed accordingly
     * Also, the hover color will be set again with the color token system completion
     */
    (Story) => (
      <Box className="base90" sx={{ margin: "3em" }}>
        {Story()}
      </Box>
    ),
  ],
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Label",
  color: "primary",
  clickable: false,
};

export const Contained = Template.bind({});
Contained.args = {
  label: "Label",
  color: "primary",
  clickable: true,
};

export const ContainedWithAvatar = Template.bind({});
ContainedWithAvatar.args = {
  ...Contained.args,
  thumbnail: "avatar",
};

export const ContainedWithLogo = Template.bind({});
ContainedWithLogo.args = {
  ...Contained.args,
  thumbnail: "logo",
};

export const ContainedWithIcon = Template.bind({});
ContainedWithIcon.args = {
  ...Contained.args,
  thumbnail: (
    <Error
      sx={{
        paddingLeft: "1.5px",
      }}
    />
  ),
};

export const ContainedWithDelete = Template.bind({});
ContainedWithDelete.args = {
  ...Contained.args,
  onDelete: () => {},
};
