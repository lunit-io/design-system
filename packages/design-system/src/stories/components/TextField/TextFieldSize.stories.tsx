import React from "react";
import {
  Box,
  Table,
  TableCell,
  TableBody,
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
    helperText: "Helper Text",
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
      control: false,
      description: "The size of the text field.",
      table: {
        defaultValue: { summary: "small" },
        type: { summary: ["small", "medium", "large"] },
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
} as Meta<typeof TextField>;

const TextFieldSizeWithTableTemplate: StoryFn<typeof TextField> = (args) => (
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

export const TextFieldSize = {
  render: TextFieldSizeWithTableTemplate,
  name: "Size",
};

const TextFieldSizeTemplate: StoryFn<typeof TextField> = (args) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
    <Box>
      <TextField sx={{ mr: 4 }} {...args} />
      <TextField sx={{ mr: 4 }} {...args} size="medium" />
      <TextField {...args} size="large" />
    </Box>
    <Box>
      <TextField sx={{ mr: 4 }} {...args} multiline />
      <TextField sx={{ mr: 4 }} {...args} size="medium" multiline />
      <TextField {...args} size="large" multiline />
    </Box>
  </Box>
);

export const TextFieldOnlySize = {
  render: TextFieldSizeTemplate,
  name: "Size Only",
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
