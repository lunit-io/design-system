import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
} from "@mui/material";
import { action } from "@storybook/addon-actions";
import { Bell } from "@lunit/design-system-icons";

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
      defaultValue: "true",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    value: {
      control: false,
      table: { type: { summary: "any" } },
    },
    selected: {
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    selectedColor: {
      control: false,
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
        type: "select",
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
    selected: true,
    kind: "contained",
  },
  parameters: {
    controls: {
      include: [
        "icon",
        "value",
        "kind",
        "selectedColor",
        "hasIconOnly",
        "onClick",
        "children",
        "disabled",
        "size",
        "selected",
        "color",
        "onChange",
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

const Template: ComponentStory<typeof ToggleButton> = (arg) => (
  <Table sx={{ width: 330 }}>
    <TableHead>
      <TableRow>
        <TableCell>
          <Typography variant="body2_m">Selected color</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2_m">Primary</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2_m">Secondary</Typography>
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          <Typography variant="body2_m">Selected</Typography>
        </TableCell>
        <TableCell>
          <ToggleButton {...arg} hasIconOnly icon={<Bell />} value="first">
            {arg.children}
          </ToggleButton>
        </TableCell>
        <TableCell>
          <ToggleButton
            {...arg}
            icon={<Bell />}
            hasIconOnly
            selectedColor="secondary"
            value="second"
          >
            {arg.children}
          </ToggleButton>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const ToggleButtonWithIconOnlyStory = Template.bind({});
ToggleButtonWithIconOnlyStory.storyName = "Icon only";
