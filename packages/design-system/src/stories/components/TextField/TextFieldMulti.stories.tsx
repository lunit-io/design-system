import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import TextField from "@/components/TextField/TextField";

import type { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Components/TextField",
  component: TextField,
  args: {
    disabled: false,
    size: "small",
    placeholder: "Please typing...",
    helperText: "Helper text",
    multiline: true,
  },
  argTypes: {
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
    rows: {
      type: "number",
      description: `The number of rows to display when multiline option is set to "true"
        \n the rows default value is undefined.`,
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: ["number", "string", "undefined"] },
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
        'The helper text content, use "error" or "sub text" to display helper text.',
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "string" },
      },
    },
    multiline: {
      type: "boolean",
      description: "If true, a textarea element(multi line) will be rendered.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
  parameters: {
    controls: {
      include: ["size", "rows", "disabled", "helperText", "placeholder"],
    },
    docs: {
      description: {
        component: `It is a text field that allows users to enter and edit text.
          \n It is usually used in forms. It can be used as a single line or multi-line text field.
          \n It can be used with an icon on the left or right side.`,
      },
    },
  },
  decorators: [(Story) => <Box className="base00">{Story()}</Box>],
} as Meta<typeof TextField>;

const MultiTemplate: StoryFn<typeof TextField> = (args) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          Default
        </TableCell>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          Error
        </TableCell>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          Focused
        </TableCell>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          Disabled
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          <TextField {...args} multiline />
        </TableCell>
        <TableCell>
          <TextField {...args} multiline error />
        </TableCell>
        <TableCell>
          <TextField {...args} multiline focused />
        </TableCell>
        <TableCell>
          <TextField {...args} multiline disabled />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const TextFieldWithMulti = {
  render: MultiTemplate,
  name: "Multi Line",
};
