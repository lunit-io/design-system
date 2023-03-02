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
    disabled: {
      control: {
        type: "radio",
      },
      options: [true, false],
      defaultValue: false,
      description: "If true, the text field will be disabled.",
      table: {
        defaultValue: { summary: false },
        type: { summary: [true, false] },
      },
    },
    size: {
      control: false,
      defaultValue: "small",
      description: "The size of the text field.",
      table: {
        defaultValue: { summary: "small" },
        type: { summary: ["small", "medium", "large"] },
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
        'The helper text content, use "error " or "sub text " to display helper text.',
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "string" },
      },
    },
  },
  parameters: {
    controls: {
      include: ["size", "disabled", "helperText", "placeholder"],
    },
    docs: {
      description: {
        component: `The size of the text field.
          \n The default value is "small" and can be set to "medium" or "large".`,
      },
    },
  },
  decorators: [(Story) => <Box className="base00">{Story()}</Box>],
} as ComponentMeta<typeof TextField>;

const TextFieldSizeTemplate: ComponentStory<typeof TextField> = (args) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          Small
        </TableCell>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          Medium
        </TableCell>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          Large
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell
          sx={{ typography: "body2_14_medium", color: "inherit" }}
          width={100}
        >
          Single line
        </TableCell>
        <TableCell>
          <TextField {...args} />
        </TableCell>
        <TableCell>
          <TextField {...args} size="medium" />
        </TableCell>
        <TableCell>
          <TextField {...args} size="large" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          sx={{ typography: "body2_14_medium", color: "inherit" }}
          width={50}
        >
          Multi line
        </TableCell>
        <TableCell>
          <TextField {...args} multiline />
        </TableCell>
        <TableCell>
          <TextField {...args} size="medium" multiline />
        </TableCell>
        <TableCell>
          <TextField {...args} size="large" multiline />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const TextFieldSize = TextFieldSizeTemplate.bind({});
TextFieldSize.storyName = "Size";
