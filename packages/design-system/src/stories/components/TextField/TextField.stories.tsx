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
    placeholder: {
      type: "string",
      defaultValue: "Please typing...",
    },
    helperText: {
      type: "string",
      defaultValue: "Helper Text",
    },
  },
  parameters: {
    controls: {
      include: [
        "rows",
        "helperText",
        "placeholder",
        "handleLeftIconClick",
        "handleRightIconClick",
      ],
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
        <TableCell>Disabled</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          <TextField {...args} />
        </TableCell>
        <TableCell>
          <TextField error {...args} />
        </TableCell>
        <TableCell>
          <TextField disabled {...args} />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

const MultiTemplate: ComponentStory<typeof TextField> = (args) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Default</TableCell>
        <TableCell>Error</TableCell>
        <TableCell>Disabled</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          <TextField multiline {...args} />
        </TableCell>
        <TableCell>
          <TextField multiline error {...args} />
        </TableCell>
        <TableCell>
          <TextField multiline disabled {...args} />
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
        <TableCell>Disabled</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Left Icon</TableCell>
        <TableCell>
          <TextField leftIcon={<Bell />} {...args} />
        </TableCell>
        <TableCell>
          <TextField error leftIcon={<Bell />} {...args} />
        </TableCell>
        <TableCell>
          <TextField disabled leftIcon={<Bell />} {...args} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Right Icon</TableCell>
        <TableCell>
          <TextField rightIcon={<Bell />} {...args} />
        </TableCell>
        <TableCell>
          <TextField error rightIcon={<Bell />} {...args} />
        </TableCell>
        <TableCell>
          <TextField disabled rightIcon={<Bell />} {...args} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Left Right Both Icon</TableCell>
        <TableCell>
          <TextField leftIcon={<Bell />} rightIcon={<Bell />} {...args} />
        </TableCell>
        <TableCell>
          <TextField error leftIcon={<Bell />} rightIcon={<Bell />} {...args} />
        </TableCell>
        <TableCell>
          <TextField
            disabled
            leftIcon={<Bell />}
            rightIcon={<Bell />}
            {...args}
          />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const TextFieldWithSingle = SingleTemplate.bind({});

export const TextFieldWithMulti = MultiTemplate.bind({});
TextFieldWithMulti.argTypes = {
  rows: {
    type: "number",
    defaultValue: 3,
  },
};

export const TextFieldWithIcon = SingleWithIconTemplate.bind({});
TextFieldWithIcon.argTypes = {
  handleLeftIconClick: {
    control: {
      type: "select",
    },
    options: ["function", undefined],
    mapping: {
      function: action("handleLeftIconClick"),
      undefined: undefined,
    },
  },
  handleRightIconClick: {
    control: {
      type: "select",
    },
    options: ["function", undefined],
    mapping: {
      function: action("handleRightIconClick"),
      undefined: undefined,
    },
  },
};
