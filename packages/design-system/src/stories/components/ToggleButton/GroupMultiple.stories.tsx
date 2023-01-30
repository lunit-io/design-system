import React from "react";
import { Box } from "@mui/material";
import { action } from "@storybook/addon-actions";

import ToggleButton from "@/components/ToggleButton";
import ToggleButtonGroup from "@/components/ToggleButtonGroup";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
  argTypes: {
    icon: {
      control: false,
      description: `Use this prop when you want to add icon.
        \n It is added to the left of the text criteria,
        \n and only Icon can be checked when used with hasIconOnly.`,
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "React.ReactNode" },
      },
    },
    hasIconOnly: {
      control: false,
      description: `Option to handle so that only icons can be inserted
          \n If set to false, you can add Text.`,
      defaultValue: false,
      table: {
        defaultValue: { summary: "false" },
      },
    },
    value: {
      control: false,
      table: { type: { summary: "any" } },
    },
    selected: {
      control: false,
      table: {
        defaultValue: { summary: "false" },
      },
    },
    selectedColor: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary"],
      description:
        "The color of the button when it is in an select state. It has nothing to do with active button",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    color: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary"],
      defaultValue: "primary",
      description: "Button has three Kinds Contained, Ghost",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    kind: {
      control: {
        type: "radio",
      },
      options: ["contained", "outlined", "ghost"],
      defaultValue: "contained",
      table: {
        defaultValue: { summary: "contained" },
      },
    },
    children: {
      type: "string",
      defaultValue: "Text",
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
    onChange: {
      type: "function",
      control: false,
      options: ["function", undefined],
      mapping: {
        function: action("onChange"),
        undefined: undefined,
      },
      defaultValue: "function",
    },
  },
  args: {
    kind: "contained",
    selectedColor: "primary",
  },
  parameters: {
    controls: {
      include: [
        "value",
        "kind",
        "selectedColor",
        "onClick",
        "children",
        "disabled",
        "size",
        "selected",
        "color",
        "onChange",
        "icon",
        "hasIconOnly",
      ],
    },
    docs: {
      description: {
        component: `A Toggle Button can be used to group related options. please
				see [Material-UI Toggle Button](https://mui.com/material-ui/react-toggle-button/).`,
      },
    },
  },
} as ComponentMeta<typeof ToggleButton>;

const ToggleButtonTemplate: ComponentStory<typeof ToggleButton> = (arg) => {
  const [alignments, setAlignments] = React.useState(() => ["left", "center"]);

  const handleAlignments = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string[]
  ) => {
    setAlignments(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignments}
      onChange={handleAlignments}
      aria-label="text alignment"
      sx={{
        "& button": {
          marginRight: "7px",
        },
      }}
    >
      <ToggleButton {...arg} value="left">
        left
      </ToggleButton>
      <ToggleButton {...arg} value="center">
        center
      </ToggleButton>
      <ToggleButton {...arg} value="right">
        right
      </ToggleButton>
      <ToggleButton {...arg} value="justify" disabled>
        justify
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export const ToggleButtonMultiple = ToggleButtonTemplate.bind({});
ToggleButtonMultiple.storyName = "Group: Multiple selection";
