import React from "react";
import { action } from "@storybook/addon-actions";

import ToggleButton from "@/components/ToggleButton";
import ToggleButtonGroup from "@/components/ToggleButtonGroup";

import type { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
  args: {
    children: "Text",
    kind: "contained",
    color: "primary",
    selectedColor: "primary",
    size: "small",
    disabled: false,
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
      table: {
        defaultValue: { summary: "contained" },
      },
    },
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
    onChange: {
      type: "function",
      control: false,
      options: ["function", undefined],
      mapping: {
        function: action("onChange"),
        undefined: undefined,
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
      ],
    },
    docs: {
      description: {
        component: `A Toggle Button can be used to group related options. please
				see [Material-UI Toggle Button](https://mui.com/material-ui/react-toggle-button/).`,
      },
    },
  },
} as Meta<typeof ToggleButton>;

const GroupTemplate: StoryFn<typeof ToggleButton> = (arg) => {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
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

export const Group = {
  render: GroupTemplate,
  name: "Group",
};

const GroupMultipleTemplate: StoryFn<typeof ToggleButton> = (arg) => {
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

export const GroupMultiple = {
  render: GroupMultipleTemplate,
  name: "Group: Multiple selection",
};
