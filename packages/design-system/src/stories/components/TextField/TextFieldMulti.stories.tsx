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

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    value: {
      type: "string",
      defaultValue: "",
      description: "The value of the text field.",
      table: {
        defaultValue: { summary: "" },
        type: { summary: "string" },
      },
    },
    size: {
      control: {
        type: "radio",
      },
      defaultValue: "small",
      description: "The size of the text field.",
      table: {
        defaultValue: { summary: "small" },
        type: { summary: ["small", "medium", "large"] },
      },
    },
    rows: {
      type: "number",
      defaultValue: undefined,
      description: `The number of rows to display when multiline option is set to "true"
        \n the rows default value is 3.`,
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: ["number", "string", "undefined"] },
      },
    },
    placeholder: {
      type: "string",
      defaultValue: "Please typing...",
      description: "The placeholder content.",
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "string" },
      },
    },
    helperText: {
      type: "string",
      defaultValue: "Helper Text",
      description:
        'The helper text content, use "error" or "sub text" to display helper text.',
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "string" },
      },
    },
    multiline: {
      type: "boolean",
      defaultValue: false,
      description: "If true, a textarea element(multi line) will be rendered.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  },
  parameters: {
    controls: {
      include: [
        "value",
        "size",
        "rows",
        "multiline",
        "helperText",
        "placeholder",
      ],
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
} as ComponentMeta<typeof TextField>;

const MultiTemplate: ComponentStory<typeof TextField> = (args) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Default</TableCell>
        <TableCell>Error</TableCell>
        <TableCell>Focused</TableCell>
        <TableCell>Disabled</TableCell>
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

export const TextFieldWithMulti = MultiTemplate.bind({});
TextFieldWithMulti.storyName = "Multi Line";
