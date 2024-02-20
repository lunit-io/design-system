import React from "react";
import { action } from "@storybook/addon-actions";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Box,
} from "@mui/material";
import Bell from "@lunit/design-system-icons/Bell";

import Button from "@/components/Button";

import type { StoryObj, StoryFn, Meta } from "@storybook/react";

type SizeValues = "small" | "medium" | "large";
const sizeList: SizeValues[] = ["small", "medium", "large"];

export default {
  title: "Components/Button",
  component: Button,
  args: {
    kind: "contained",
    children: "Text",
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
    children: {
      description: "The content of the component.",
      type: "string",
    },
    kind: {
      control: {
        type: "radio",
      },
      options: ["contained", "outlined", "ghost"],
      description: "Button has three Kinds Contained, Outlined, Ghost",
      table: {
        defaultValue: { summary: "contained" },
      },
    },
    variant: {
      control: {
        type: "radio",
      },
      options: ["contained", "outlined", "text", "ghost"],
      description: "The variant is alias of kind.",
      table: {
        defaultValue: { summary: "contained" },
      },
    },
    color: {
      control: {
        type: "radio",
      },
      description: `The color of the component. It supports both default and custom theme colors,
        \nwhich can be added as shown in the palette customization guide.`,
      options: ["primary", "secondary", "error"],
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      description: "If true, the button will be disabled.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    size: {
      control: {
        type: "radio",
      },
      description: "The size of the button.",
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
        "onClick",
        "children",
        "disabled",
        "size",
        "kind",
        "variant",
        "color",
        "icon",
      ],
    },
    docs: {
      description: {
        component: `It is a Clickable default Button. For more details, please
				see [Material-UI Button](https://mui.com/material-ui/react-button/).`,
      },
    },
  },
} as Meta<typeof Button>;

export const BasicButton: StoryObj<typeof Button> = {
  render: (args) => <Button {...args}>{args.children}</Button>,
};

const SizeButtonTemplate: StoryFn<typeof Button> = (args) => {
  const { children, kind, variant, color, ...restArgs } = args;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box>
        <Button sx={{ mr: 2 }} {...restArgs} variant="contained" size="small">
          Small
        </Button>
        <Button sx={{ mr: 2 }} {...restArgs} variant="contained" size="medium">
          Medium
        </Button>
        <Button {...restArgs} variant="contained" size="large">
          Large
        </Button>
      </Box>
      <Box>
        <Button sx={{ mr: 2 }} {...restArgs} variant="outlined" size="small">
          Small
        </Button>
        <Button sx={{ mr: 2 }} {...restArgs} variant="outlined" size="medium">
          Medium
        </Button>
        <Button {...restArgs} variant="outlined" size="large">
          Large
        </Button>
      </Box>
      <Box>
        <Button sx={{ mr: 2 }} {...restArgs} variant="text" size="small">
          Small
        </Button>
        <Button sx={{ mr: 2 }} {...restArgs} variant="text" size="medium">
          Medium
        </Button>
        <Button {...restArgs} variant="text" size="large">
          Large
        </Button>
      </Box>
    </Box>
  );
};

export const Size = {
  render: SizeButtonTemplate,
  parameters: {
    controls: {
      include: ["onClick", "disabled", "icon"],
    },
  },
};
