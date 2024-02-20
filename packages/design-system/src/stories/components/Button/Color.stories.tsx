import React from "react";
import { Box } from "@mui/material";
import { action } from "@storybook/addon-actions";

import Button from "@/components/Button";

import type { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Text",
    disabled: false,
    size: "small",
    onClick: action("onClick"),
  },
  argTypes: {
    children: {
      type: "string",
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
      include: ["onClick", "children", "size", "disabled", "kind", "variant"],
    },
    pseudo: {
      hover: [
        "#hover1",
        "#hover2",
        "#hover3",
        "#hover4",
        "#hover5",
        "#hover6",
        "#hover7",
      ],
    },
    docs: {
      description: {
        component: `It is a kind Button docs. For more details, please
				see [Material-UI Button](https://mui.com/material-ui/react-button/).`,
      },
    },
  },
} as Meta<typeof Button>;

const ColorButtonTemplate: StoryFn<typeof Button> = (args) => {
  const { children, kind, variant, ...restArgs } = args;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box>
        <Button
          sx={{ mr: 2 }}
          {...restArgs}
          variant="contained"
          color="primary"
        >
          {children}
        </Button>
        <Button
          sx={{ mr: 2 }}
          {...restArgs}
          variant="contained"
          color="secondary"
        >
          {children}
        </Button>
        <Button {...restArgs} variant="contained" color="error">
          {children}
        </Button>
      </Box>
      <Box>
        <Button sx={{ mr: 2 }} {...restArgs} variant="outlined" color="primary">
          {children}
        </Button>
        <Button
          sx={{ mr: 2 }}
          {...restArgs}
          variant="outlined"
          color="secondary"
        >
          {children}
        </Button>
      </Box>
      <Box>
        <Button sx={{ mr: 2 }} {...restArgs} variant="text" color="primary">
          {children}
        </Button>
        <Button sx={{ mr: 2 }} {...restArgs} variant="text" color="secondary">
          {children}
        </Button>
        <Button {...restArgs} variant="text" color="error">
          {children}
        </Button>
      </Box>
    </Box>
  );
};

export const Color = {
  render: ColorButtonTemplate,
};
