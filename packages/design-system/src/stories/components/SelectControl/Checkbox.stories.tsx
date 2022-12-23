import React from "react";
import { Box } from "@mui/material";
import { Checkbox } from "@/components/SelectControl/Checkbox";
import ToggleFormLabel from "@/components/SelectControl/ToggleFormLabel/ToggleFormLabel";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: {
      table: {
        type: { summary: "bool" },
        defaultValue: { summary: "false" },
      },
      description: "If true, the component is checked.",
    },
    disabled: {
      control: "boolean",
      table: { type: { summary: "bool" }, defaultValue: { summary: "false" } },
      description: "If true, the component is disabled.",
    },
    indeterminate: {
      control: "boolean",
      table: { type: { summary: "bool" }, defaultValue: { summary: "false" } },
      description: "If true, the component appears indeterminate.",
    },
    onChange: {
      table: { type: { summary: "func" } },
      description:
        "Callback fired when the state is changed. Signature: `function(event: React.ChangeEvent<HTMLInputElement>) => void`",
    },
    required: {
      control: "boolean",
      table: { type: { summary: "bool" }, defaultValue: { summary: "false" } },
      description: "If true, the input element is required.",
    },
    value: {
      control: "string",
      table: { type: { summary: "any" } },
      description:
        "The value of the component. The DOM API casts this to a string.",
    },
    defaultChecked: {
      control: "boolean",
      table: { type: { summary: "bool" }, defaultValue: { summary: "false" } },
      description:
        "The default checked state. Use when the component is not controlled.",
    },
  },
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
  },
  parameters: {
    controls: {
      expanded: true,
      include: [
        "checked",
        "disabled",
        "indeterminate",
        "onChange",
        "required",
        "value",
        "defaultChecked",
      ],
    },
    docs: {
      description: {
        component:
          "This component base is Material UI Checkbox component. [Props of the Material UI Checkbox component](material-u) are also available.",
      },
    },
  },
  decorators: [
    /**
     * TODO
     * Since Color Token system will be changed, below className should be changed accordingly
     * Also, the hover color will be set again with the color token system completion
     */
    (Story) => <Box className="base90">{Story()}</Box>,
  ],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Base = Template.bind({});
