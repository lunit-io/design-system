import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { action } from "@storybook/addon-actions";
import { Bell } from "@lunit/design-system-icons";

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
    multiline: false,
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
      include: [
        "size",
        "disabled",
        "helperText",
        "placeholder",
        "onLeftIconClick",
        "onRightIconClick",
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
} as Meta<typeof TextField>;

const SingleTemplate: StoryFn<typeof TextField> = (args) => (
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
          Error Focused
        </TableCell>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          Disabled
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          <TextField {...args} />
        </TableCell>
        <TableCell>
          <TextField {...args} error />
        </TableCell>
        <TableCell>
          <TextField {...args} focused />
        </TableCell>
        <TableCell>
          <TextField {...args} error focused />
        </TableCell>
        <TableCell>
          <TextField {...args} disabled />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

const SingleWithIconTemplate: StoryFn<typeof TextField> = (args) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          Default
        </TableCell>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          Error
        </TableCell>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          focused
        </TableCell>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          Error focused
        </TableCell>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          Disabled
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          Left Icon
        </TableCell>
        <TableCell>
          <TextField {...args} leftIcon={<Bell />} />
        </TableCell>
        <TableCell>
          <TextField {...args} error leftIcon={<Bell />} />
        </TableCell>
        <TableCell>
          <TextField {...args} focused leftIcon={<Bell />} />
        </TableCell>
        <TableCell>
          <TextField {...args} error focused leftIcon={<Bell />} />
        </TableCell>
        <TableCell>
          <TextField {...args} disabled leftIcon={<Bell />} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          Right Icon
        </TableCell>
        <TableCell>
          <TextField {...args} rightIcon={<Bell />} />
        </TableCell>
        <TableCell>
          <TextField {...args} error rightIcon={<Bell />} />
        </TableCell>
        <TableCell>
          <TextField {...args} focused rightIcon={<Bell />} />
        </TableCell>
        <TableCell>
          <TextField {...args} error focused rightIcon={<Bell />} />
        </TableCell>
        <TableCell>
          <TextField {...args} disabled rightIcon={<Bell />} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
          Left Right Both Icon
        </TableCell>
        <TableCell>
          <TextField {...args} leftIcon={<Bell />} rightIcon={<Bell />} />
        </TableCell>
        <TableCell>
          <TextField {...args} error leftIcon={<Bell />} rightIcon={<Bell />} />
        </TableCell>
        <TableCell>
          <TextField
            {...args}
            focused
            leftIcon={<Bell />}
            rightIcon={<Bell />}
          />
        </TableCell>
        <TableCell>
          <TextField
            {...args}
            error
            focused
            leftIcon={<Bell />}
            rightIcon={<Bell />}
          />
        </TableCell>
        <TableCell>
          <TextField
            {...args}
            disabled
            leftIcon={<Bell />}
            rightIcon={<Bell />}
          />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const TextFieldWithSingle = {
  render: SingleTemplate,

  argTypes: {
    onLeftIconClick: {
      control: false,
      options: ["function", undefined],
      mapping: {
        function: action("onLeftIconClick"),
        undefined: undefined,
      },
      description: "The left icon click event call back function.",
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "function" },
      },
    },
    onRightIconClick: {
      control: false,
      options: ["function", undefined],
      mapping: {
        function: action("onRightIconClick"),
        undefined: undefined,
      },
      description: "The right icon click event call back function.",
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "function" },
      },
    },
  },

  name: "Single Line",
};

export const TextFieldWithIcon = {
  render: SingleWithIconTemplate,

  argTypes: {
    onLeftIconClick: {
      control: {
        type: "select",
      },
      options: ["function", undefined],
      mapping: {
        function: action("onLeftIconClick"),
        undefined: undefined,
      },
      description: "The left icon click event call back function.",
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "function" },
      },
    },
    onRightIconClick: {
      control: {
        type: "select",
      },
      options: ["function", undefined],
      mapping: {
        function: action("onRightIconClick"),
        undefined: undefined,
      },
      description: "The right icon click event call back function.",
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "function" },
      },
    },
  },

  name: "With Icon(single-line only)",
};
