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

const TextFieldSizeTemplate: ComponentStory<typeof TextField> = (args) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell>Small</TableCell>
        <TableCell>Medium</TableCell>
        <TableCell>Large</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell width={100}>Single line</TableCell>
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
        <TableCell width={50}>Multi line</TableCell>
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
