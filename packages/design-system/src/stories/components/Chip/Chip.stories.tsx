import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Box } from "@mui/material";
import Chip from "@/components/Chip/Chip";
import {
  Logo16,
  Avatar16,
  Success16,
  Error16,
  Information16,
  Warning16,
} from "@lunit/design-system-icons";

import type {
  OutlinedChipProps,
  ReadOnlyContainedChipProps,
  EnableContainedChipProps,
  DeletableContainedChipProps,
  ChipProps,
  ChipThumbnail,
} from "@/components/Chip/Chip.types";

export default {
  title: "Components/Chips",
  component: Chip,
  argTypes: {
    thumbnail: {
      control: {
        type: "select",
      },
      options: [
        undefined,
        "Initial",
        "Logo16",
        "Avatar16",
        "Avatar16Filled",
        "Success16",
        "Success16Filled",
        "Error16",
        "Error16Filled",
        "Information16",
        "Information16Filled",
        "Warning16",
        "Warning16Filled",
      ],
      mapping: {
        undefined: undefined,
        Initial: "W as initial",
        Logo16: <Logo16 />,
        Avatar16: <Avatar16 />,
        Avatar16Filled: <Avatar16 variant="filled" />,
        Success16: <Success16 />,
        Success16Filled: <Success16 variant="filled" />,
        Error16: <Error16 />,
        Error16Filled: <Error16 variant="filled" />,
        Information16: <Information16 />,
        Information16Filled: <Information16 variant="filled" />,
        Warning16: <Warning16 />,
        Warning16Filled: <Warning16 variant="filled" />,
      },
    },
    onClick: {
      control: {
        type: "select",
      },
      options: ["function", undefined],
      mapping: {
        function: action("onClick"),
        undefined: undefined,
      },
    },
    onDelete: {
      control: {
        type: "select",
      },
      options: ["function", undefined],
      mapping: {
        function: action("onDelete"),
        undefined: undefined,
      },
      defaultValue: null,
    },
  },
  args: {
    kind: "contained",
    label: "label@lunit.io",
  },
  parameters: {
    docs: {
      description: {
        component: `Chips are compact elements that represent an input, attribute, or action.`,
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
      <Box className="base10" sx={{ margin: "3em" }}>
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
  color: "primary",
  kind: "outlined",
};

export const Contained = Template.bind({});
Contained.args = {
  color: "primary",
  kind: "contained",
};

export const ContainedWithAvatar = Template.bind({});
ContainedWithAvatar.args = {
  ...Contained.args,
  thumbnail: "Initial",
};
ContainedWithAvatar.parameters = {
  docs: {
    description: {
      story: `Contained chip can have thumbnail as "avatar".`,
    },
  },
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
  thumbnail: <Logo16 />,
};

export const ContainedWithIcon = Template.bind({});
ContainedWithIcon.parameters = {
  docs: {
    description: {
      story: `Contained chip can have icon thumbnails`,
    },
  },
};
ContainedWithIcon.args = {
  ...Contained.args,
  thumbnail: <Error16 />,
};

export const ContainedWithDelete: ComponentStory<typeof Chip> = (args) => (
  <Chip {...args} kind="contained" onClick={undefined} onDelete={() => {}} />
);
ContainedWithDelete.parameters = {
  docs: {
    description: {
      story: `Contained chip can have delete button. When Chip is deletable, onClick is disabled.`,
    },
  },
};
