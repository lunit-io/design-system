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
        <TableCell>focused</TableCell>
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

const MultiTemplate: ComponentStory<typeof TextField> = (args) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Default</TableCell>
        <TableCell>Error</TableCell>
        <TableCell>focused</TableCell>
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
TextFieldWithSingle.storyName = "Single Line";

export const TextFieldWithMulti = MultiTemplate.bind({});
TextFieldWithMulti.argTypes = {
  rows: {
    type: "number",
    defaultValue: 3,
  },
};
TextFieldWithMulti.storyName = "Multi Line";

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
TextFieldWithIcon.storyName = "With Icon";
