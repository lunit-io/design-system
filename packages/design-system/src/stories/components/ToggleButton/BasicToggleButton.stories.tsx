import React, { useEffect, useState } from "react";
import { action } from "@storybook/addon-actions";

import ToggleButton from "@/components/ToggleButton";

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
    children: {
      type: "string",
      defaultValue: "Text",
    },
    selected: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      table: {
        defaultValue: { summary: "false" },
      },
    },
    selectedColor: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary"],
      defaultValue: "primary",
      description:
        "The color of the button when it is in an select state. It has nothing to do with active button",
      table: {
        defaultValue: { summary: "primary" },
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
      options: ["primary", "secondary"],
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
    onClick: {
      type: "function",
      control: false,
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
        "onChange",
        "onClick",
        "children",
        "disabled",
        "size",
        "kind",
        "color",
        "selectedColor",
        "selected",
        "value",
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

const BasicToggleButtonTemplate: ComponentStory<typeof ToggleButton> = (
  arg
) => {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(Boolean(arg.selected));
  }, [arg.selected]);

  return (
    <ToggleButton
      {...arg}
      value="test"
      selected={selected}
      onChange={() => setSelected(!selected)}
    >
      {arg.children}
    </ToggleButton>
  );
};

export const BasicToggleButton = BasicToggleButtonTemplate.bind({});
BasicToggleButton.storyName = "Basic ToggleButton";
