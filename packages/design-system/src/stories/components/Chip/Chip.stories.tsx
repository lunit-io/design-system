import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Chip from "@/components/Chip";
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
    kind: {
      description: `Default status of Contained or Outlined Chip is readOnly. You can only pass onClick, onDelete or thumbnail to Contained Chip.`,
    },
    onClick: {
      description: `Contained chip can have onClick event. When Chip is clickable, onDelete is disabled.`,
      control: {
        type: "select",
        defaultValue: undefined,
      },
      options: ["function", undefined],
      mapping: {
        function: action("onClick"),
        undefined: undefined,
      },
      if: {
        arg: "contained",
      },
    },
    onDelete: {
      description:
        "Contained chip can have onDelete event. When Chip is deletable, onClick is disabled.",
      control: {
        type: "select",
      },
      options: ["function", undefined],
      mapping: {
        function: action("onDelete"),
        undefined: undefined,
      },
      defaultValue: null,
      if: {
        arg: "contained",
      },
    },

    thumbnail: {
      control: {
        type: "select",
        defaultValue: "undefined",
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
      if: {
        arg: "contained",
      },
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
    controls: {
      expanded: true,
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Outlined = Template.bind({});

Outlined.parameters = {
  docs: {
    description: {
      story: `Outlined chip only contains label and shows the state of disabled.`,
    },
  },
  controls: {
    exclude: [
      "thumbnail",
      "onClick",
      "onDelete",
      "disabled",
      "clickable",
      "skipFocusWhenDisabled",
    ],
  },
};
Outlined.args = {
  color: "primary",
  kind: "outlined",
};

export const Contained = Template.bind({});
Contained.parameters = {
  controls: {
    exclude: [
      "thumbnail",
      "onClick",
      "onDelete",
      "disabled",
      "clickable",
      "skipFocusWhenDisabled",
    ],
  },
};

Contained.args = {
  color: "primary",
  kind: "contained",
};

export const ContainedWithClick = Template.bind({});
ContainedWithClick.parameters = {
  docs: {
    description: {
      story: `Contained chip can have onClick event. When Chip is clickable, onDelete is disabled.`,
    },
  },
  controls: {
    exclude: ["onDelete", "deletable"],
  },
  if: {
    arg: "onDelete",
    truthy: false,
  },
};

export const ContainedWithDelete = Template.bind({});
ContainedWithDelete.parameters = {
  docs: {
    description: {
      story: `Contained chip can have delete button. When Chip is deletable, onClick is disabled.`,
    },
  },
  controls: {
    exclude: ["onClick", "clickable"],
  },
  if: {
    arg: "onClick",
    truthy: false,
  },
};

export const ContainedWithThumbnail = Template.bind({});
ContainedWithThumbnail.parameters = {
  docs: {
    description: {
      story: `Contained chip can have thumbnail as "avatar", "logo", and lunit icons.`,
    },
  },
};
