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

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
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
      include: [
        "size",
        "helperText",
        "placeholder",
        "handleLeftIconClick",
        "handleRightIconClick",
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

const SingleTemplate: ComponentStory<typeof TextField> = (args) => (
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
          <TextField {...args} />
        </TableCell>
        <TableCell>
          <TextField {...args} error />
        </TableCell>
        <TableCell>
          <TextField {...args} focused />
        </TableCell>
        <TableCell>
          <TextField {...args} disabled />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

const SingleWithIconTemplate: ComponentStory<typeof TextField> = (args) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell>Default</TableCell>
        <TableCell>Error</TableCell>
        <TableCell>focused</TableCell>
        <TableCell>Disabled</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Left Icon</TableCell>
        <TableCell>
          <TextField {...args} leftIcon={<Bell />} />
        </TableCell>
        <TableCell>
          <TextField {...args} error leftIcon={<Bell />} />
        </TableCell>
        <TableCell>
          <TextField {...args} focused />
        </TableCell>
        <TableCell>
          <TextField {...args} disabled leftIcon={<Bell />} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Right Icon</TableCell>
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
          <TextField {...args} disabled rightIcon={<Bell />} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Left Right Both Icon</TableCell>
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
            disabled
            leftIcon={<Bell />}
            rightIcon={<Bell />}
          />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const TextFieldWithSingle = SingleTemplate.bind({});
TextFieldWithSingle.argTypes = {
  handleLeftIconClick: {
    control: false,
    defaultValue: "function",
    options: ["function", undefined],
    mapping: {
      function: action("handleLeftIconClick"),
      undefined: undefined,
    },
    description: "The left icon click event call back function.",
    table: {
      defaultValue: { summary: "undefined" },
      type: { summary: "function" },
    },
  },
  handleRightIconClick: {
    control: false,
    defaultValue: "function",
    options: ["function", undefined],
    mapping: {
      function: action("handleRightIconClick"),
      undefined: undefined,
    },
    description: "The right icon click event call back function.",
    table: {
      defaultValue: { summary: "undefined" },
      type: { summary: "function" },
    },
  },
};
TextFieldWithSingle.storyName = "Single Line";

export const TextFieldWithIcon = SingleWithIconTemplate.bind({});
TextFieldWithIcon.argTypes = {
  handleLeftIconClick: {
    control: {
      type: "select",
    },
    defaultValue: "function",
    options: ["function", undefined],
    mapping: {
      function: action("handleLeftIconClick"),
      undefined: undefined,
    },
    description: "The left icon click event call back function.",
    table: {
      defaultValue: { summary: "undefined" },
      type: { summary: "function" },
    },
  },
  handleRightIconClick: {
    control: {
      type: "select",
    },
    defaultValue: "function",
    options: ["function", undefined],
    mapping: {
      function: action("handleRightIconClick"),
      undefined: undefined,
    },
    description: "The right icon click event call back function.",
    table: {
      defaultValue: { summary: "undefined" },
      type: { summary: "function" },
    },
  },
};
TextFieldWithIcon.storyName = "With Icon";
