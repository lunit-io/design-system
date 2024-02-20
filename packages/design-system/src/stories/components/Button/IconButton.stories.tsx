import React from "react";
import Bell from "@lunit/design-system-icons/Bell";
import { action } from "@storybook/addon-actions";

import Button from "@/components/Button";

import type { StoryFn, Meta } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    color: "primary",
    disabled: false,
    size: "small",
    onClick: action("onClick"),
  },
  argTypes: {
    icon: {
      control: false,
      description: `Use this prop when you want to add icon.
      \n It is added to the left of the text criteria`,
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "React.ReactNode" },
      },
    },
    color: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary", "error"],
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "medium", "large"],
      table: {
        defaultValue: { summary: "small" },
      },
    },
    onClick: {
      type: "function",
      control: {
        type: "radio",
      },
      options: ["function", undefined],
      mapping: {
        function: action("onClick"),
        undefined: undefined,
      },
      description:
        "It is a callback function that is called when the button is clicked.",
    },
  },
  parameters: {
    controls: {
      include: [
        "icon",
        "onClick",
        "disabled",
        "size",
        "kind",
        "variant",
        "color",
      ],
    },
    docs: {
      description: {
        component: `It is a Clickable Icon Button. For more details, please
				see [Material-UI Button](https://mui.com/material-ui/react-button/).`,
      },
    },
  },
} as Meta<typeof Button>;

const IconButtonTemplate: StoryFn<typeof Button> = (args) => {
  const { variant, kind, ...restArgs } = args;

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button icon={<Bell />} {...restArgs} kind="contained">
        Contained
      </Button>
      <Button
        icon={<Bell />}
        {...restArgs}
        color={args.color === "error" ? "primary" : args.color}
        kind="outlined"
      >
        Outlined
      </Button>
      <Button icon={<Bell />} {...restArgs} kind="ghost">
        Ghost
      </Button>
    </Box>
  );
};

const IconOnlyButtonTemplate: StoryFn<typeof Button> = (args) => {
  const { variant, kind, ...restArgs } = args;

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button icon={<Bell />} {...restArgs} kind="contained" />
      <Button
        icon={<Bell />}
        {...restArgs}
        color={args.color === "error" ? "primary" : args.color}
        kind="outlined"
      />
      <Button icon={<Bell />} {...restArgs} kind="ghost" />
    </Box>
  );
};

export const IconOnlyButton = {
  render: IconOnlyButtonTemplate,
  argTypes: {
    children: {
      control: false,
      type: "string",
      table: {
        defaultValue: { summary: "undefined" },
      },
    },
  },
  name: "Icon only",
};

export const IconWithTextButton = {
  render: IconButtonTemplate,
  argTypes: {
    children: {
      type: "string",
      table: {
        defaultValue: { summary: "undefined" },
      },
    },
  },

  name: "Icon",
};
