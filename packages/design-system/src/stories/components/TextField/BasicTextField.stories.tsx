import React from "react";
import { Box } from "@mui/material";
import { Bell } from "@lunit/design-system-icons";

import TextField from "@/components/TextField/TextField";

import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/TextField",
  component: TextField,
  args: {
    multiline: false,
    size: "small",
    disabled: false,
    error: false,
    placeholder: "Please typing...",
    helperText: "",
  },
  argTypes: {
    multiline: {
      control: {
        type: "radio",
      },
      options: [true, false],
      description:
        "The multiline prop transforms the text field into a TextareaAutosize element.",
    },
    error: {
      control: {
        type: "radio",
      },
      options: [true, false],
      description:
        "The error prop toggles the error state. The helperText prop can then be used to provide feedback to the user about the error.",
    },
    disabled: {
      control: {
        type: "radio",
      },
      options: [true, false],
      description: "If true, the text field will be disabled.",
      table: {
        defaultValue: { summary: false },
        type: { summary: [true, false] },
      },
    },
    size: {
      control: {
        type: "radio",
      },
      description: "The size of the text field.",
      table: {
        defaultValue: { summary: "small" },
        type: { summary: ["small", "medium", "large"] },
      },
    },
    placeholder: {
      type: "string",
      description: "The placeholder content.",
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "string" },
      },
    },
    helperText: {
      type: "string",
      description:
        'The helper text content, use "error " or "sub text " to display helper text.',
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "string" },
      },
    },
  },
  parameters: {
    controls: {
      include: [
        "size",
        "disabled",
        "helperText",
        "placeholder",
        "multiline",
        "error",
      ],
    },
    docs: {
      description: {
        component: `It is a text field that allows users to enter and edit text.
          \n It is usually used in forms. It can be used as a single line or multi-line text field.
          \n It can be used with an icon on the left or right side.`,
      },
    },
  },
  decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta<typeof TextField>;

export const BasicTextField: StoryObj<typeof TextField> = {
  render: (args) => <TextField {...args}>{args.children}</TextField>,
};

const MultiAndSingleTemplate: StoryFn<typeof TextField> = (args) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <TextField {...args} />
      <TextField {...args} multiline={true} />
    </Box>
  );
};

export const MultiAndSingle: StoryObj<typeof TextField> = {
  render: MultiAndSingleTemplate,
  parameters: {
    controls: {
      include: ["size", "disabled", "helperText", "placeholder", "error"],
    },
  },
};

const DisabledTemplate: StoryFn<typeof TextField> = (args) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <TextField {...args} disabled />
      <TextField {...args} multiline={true} disabled />
    </Box>
  );
};

export const Disabled: StoryObj<typeof TextField> = {
  render: DisabledTemplate,
  parameters: {
    controls: {
      include: ["size", "helperText", "placeholder", "error", "disabled"],
    },
  },
};

const ErrorTemplate: StoryFn<typeof TextField> = (args) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <TextField {...args} error />
      <TextField {...args} multiline={true} error />
    </Box>
  );
};

export const Error: StoryObj<typeof TextField> = {
  render: ErrorTemplate,
  parameters: {
    controls: {
      include: ["size", "helperText", "placeholder", "disabled"],
    },
  },
};

const PlaceholderTemplate: StoryFn<typeof TextField> = (args) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <TextField {...args} placeholder="Please typing..." />
      <TextField {...args} multiline={true} placeholder="Please typing..." />
    </Box>
  );
};

export const Placeholder: StoryObj<typeof TextField> = {
  render: PlaceholderTemplate,
  parameters: {
    controls: {
      include: ["size", "helperText", "disabled", "error"],
    },
  },
};

const HelperTextTemplate: StoryFn<typeof TextField> = (args) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <TextField {...args} helperText="helper text" />
      <TextField {...args} multiline={true} helperText="helper text" />
    </Box>
  );
};

export const HelperText: StoryObj<typeof TextField> = {
  render: HelperTextTemplate,
  parameters: {
    controls: {
      include: ["size", "disabled", "error", "placeholder"],
    },
  },
};

const IconTemplate: StoryFn<typeof TextField> = (args) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <TextField {...args} leftIcon={<Bell />} />
      <TextField {...args} rightIcon={<Bell />} />
    </Box>
  );
};

export const Icon: StoryObj<typeof TextField> = {
  render: IconTemplate,
};
