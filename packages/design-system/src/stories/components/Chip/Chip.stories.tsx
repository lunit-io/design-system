import React from "react";
import { Box } from "@mui/material";
import { Error } from "@lunit/design-system-icons";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Chip from "@/components/Chip/Chip";
import {
  ChipProps,
  OutlinedChipProps,
  ContainedChipProps,
  ChipThumbnail,
} from "@/components/Chip/Chip.types";

export default {
  title: "Components/Chips",
  component: Chip,
  argTypes: {
    thumbnail: {
      type: "select",
      options: ["avatar", "logo", undefined],
    },
    onClick: {
      type: "select",
      options: ["function", undefined],
      mapping: {
        function: action("onClick"),
        undefined: undefined,
      },
      defaultValue: undefined,
    },
    onDelete: {
      type: "select",
      options: ["function", undefined],
      mapping: {
        function: action("onDelete"),
        undefined: undefined,
      },
      defaultValue: undefined,
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Chips are compact elements that represent an input, attribute, or action.
        see [Material-UI Chip](https://mui.com/components/chips/)`,
      },
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
Outlined.parameters = {
  docs: {
    description: {
      story: `Outlined chip only contains label and shows the state of disabled.`,
    },
  },
};
Outlined.args = {
  label: "Label",
  color: "primary",
  style: "outlined",
};

export const Contained = Template.bind({});
Contained.args = {
  label: "Label",
  color: "primary",
  style: "contained",
};

export const ContainedWithAvatar = Template.bind({});
ContainedWithAvatar.parameters = {
  docs: {
    description: {
      story: `Contained chip can have thumbnail as "avatar".`,
    },
  },
};
ContainedWithAvatar.args = {
  ...Contained.args,
  thumbnail: "avatar",
};

export const ContainedWithLogo = Template.bind({});
ContainedWithLogo.parameters = {
  docs: {
    description: {
      story: `Contained chip can have thumbnail as "logo"`,
    },
  },
};
ContainedWithLogo.args = {
  ...Contained.args,
  thumbnail: "logo",
};

export const ContainedWithIcon = Template.bind({});
ContainedWithIcon.parameters = {
  docs: {
    description: {
      story: `Contained chip can have thumbnail as props, but it should be styled like below.`,
    },
  },
};
ContainedWithIcon.args = {
  ...Contained.args,
  thumbnail: (
    <Error
      variant="filled"
      sx={{
        "&.MuiChip-icon": {
          marginLeft: "6px",
        },
      }}
    />
  ),
};

export const ContainedWithDelete = Template.bind({});
ContainedWithDelete.parameters = {
  docs: {
    description: {
      story: `Contained chip can have delete button.`,
    },
  },
};
ContainedWithDelete.args = {
  ...Contained.args,
  onDelete: () => {},
};
