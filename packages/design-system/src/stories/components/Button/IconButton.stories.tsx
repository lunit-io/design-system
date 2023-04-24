import React from "react";
import Bell from "@lunit/design-system-icons/Bell";
import { action } from "@storybook/addon-actions";

import Button from "@/components/Button";

import type { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    kind: "contained",
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
    kind: {
      control: {
        type: "radio",
      },
      options: ["contained", "outlined", "ghost"],
      description: "Button has three Kinds Contained, Outlined, Ghost",
      defaultValue: "contained",
      table: {
        defaultValue: { summary: "contained" },
      },
    },
    color: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary", "error"],
      defaultValue: "primary",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      table: {
        defaultValue: { summary: "false" },
      },
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "medium", "large"],
      defaultValue: "small",
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
      defaultValue: "function",
      description:
        "It is a callback function that is called when the button is clicked.",
    },
  },
  parameters: {
    controls: {
      include: [
        "children",
        "icon",
        "onClick",
        "disabled",
        "size",
        "kind",
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

const IconButtonTemplate: StoryFn<typeof Button> = (args) => (
  <Button icon={<Bell />} {...args}>
    {args.children}
  </Button>
);

export const IconOnlyButton = {
  render: IconButtonTemplate,

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
      defaultValue: "Text",
      table: {
        defaultValue: { summary: "undefined" },
      },
    },
  },

  name: "Icon",
};
