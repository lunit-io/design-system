import React from "react";
import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Box } from "@mui/system";

import Chip from "@/components/Chip";
import {
  Logo16,
  Avatar16,
  Success16,
  Error16,
  Information16,
  Warning16,
} from "@lunit/design-system-icons";

export default {
  title: "Components/Chips",
  component: Chip,
  argTypes: {
    kind: {
      description: `Default status of Contained or Outlined Chip is readOnly. You can pass onClick, onDelete or thumbnail to Contained Chip only.`,
      control: {
        type: "select",
      },
      options: ["contained", "outlined"],
    },
    variant: {
      description: `The variant is alias of kind. It is Filled or Outlined.`,
      control: {
        type: "select",
      },
      options: [undefined, "filled", "outlined"],
    },
    onClick: {
      description: `Contained chip can have onClick event. When Chip is clickable, onDelete is disabled.`,
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
    },

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
  },
  args: {
    kind: "contained",
    variant: "filled",
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
} as Meta<typeof Chip>;

export const Basic = {};

export const Outlined = {
  parameters: {
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
  },

  args: {
    color: "primary",
    kind: "outlined",
    variant: "outlined",
  },

  name: "Kind(Variant): Outlined",
};

export const Contained = {
  parameters: {
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
  },

  args: {
    color: "primary",
    kind: "contained",
    variant: "filled",
  },

  name: "Kind(Variant): Contained / Read Only",
};

export const Kind = {
  chromatic: { disableSnapshot: true },
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
      <Chip kind="outlined" label="label@lunit.io" />
      <Chip kind="contained" label="label@lunit.io" />
    </Box>
  ),
};

export const Color = {
  chromatic: { disableSnapshot: true },
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
      <Chip color="primary" label="label@lunit.io" />
      <Chip color="secondary" label="label@lunit.io" />
      <Chip color="warning" label="label@lunit.io" />
      <Chip color="error" label="label@lunit.io" />
      <Chip color="success" label="label@lunit.io" />
    </Box>
  ),
};

export const Thumbnail = {
  chromatic: { disableSnapshot: true },
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
      <Chip thumbnail={<Logo16 />} label="label@lunit.io" />
      <Chip thumbnail={<Avatar16 />} label="label@lunit.io" />
      <Chip thumbnail={<Success16 />} label="label@lunit.io" />
      <Chip thumbnail="W as initial" label="label@lunit.io" />
    </Box>
  ),
};

export const ContainedWithClick = {
  args: {
    ...Contained.args,
    onClick: action("onClick"),
    onDelete: undefined,
  },

  parameters: {
    docs: {
      description: {
        story: `Contained chip can have onClick event. When Chip is clickable, onDelete is disabled.`,
      },
    },
    controls: {
      exclude: ["onDelete", "deletable"],
    },
  },

  name: "Kind(Variant): Contained / Enable",
};

export const ContainedWithDelete = {
  args: {
    ...Contained.args,
    onClick: undefined,
    onDelete: action("onDelete"),
  },

  parameters: {
    docs: {
      description: {
        story: `Contained chip can have delete button. When Chip is deletable, onClick is disabled.`,
      },
    },
    controls: {
      exclude: ["onClick", "clickable"],
    },
  },

  name: "Kind(Variant): Contained / Deletable",
};

export const ContainedWithThumbnail = {
  args: {
    ...Contained.args,
    thumbnail: "Initial",
    onClick: undefined,
    onDelete: undefined,
  },

  parameters: {
    docs: {
      description: {
        story: `Contained chip can have thumbnail as "avatar", "logo", and lunit icons.`,
      },
    },
    controls: {
      exclude: ["onClick", "onDelete"],
    },
  },

  name: "Kind(Variant): Contained with Thumbnail",
};

export const ContainedWithDeleteAndThumbnail = {
  args: {
    ...Contained.args,
    thumbnail: "Initial",
    onClick: undefined,
    onDelete: action("onDelete"),
  },

  parameters: {
    docs: {
      description: {
        story: `Contained chip can have thumbnail and delete button.`,
      },
    },
    controls: {
      exclude: ["onClick"],
    },
  },

  name: "Kind(Variant): Contained with Thumbnail and Deletable",
};
