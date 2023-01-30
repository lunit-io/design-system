import React from "react";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
} from "@mui/material";
import { Bell } from "@lunit/design-system-icons";
import { action } from "@storybook/addon-actions";

import ToggleButton from "@/components/ToggleButton";

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import type { ButtonProps } from "@/components/Button/Button.types";

type Size = Pick<ButtonProps, "size">;
type SizeValues = Size[keyof Size];
const sizeList: SizeValues[] = ["small", "medium", "large"];

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
  argTypes: {
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
  selectedColor: {
    control: {
      type: "radio",
    },
    defaultValue: "primary",
    options: ["primary", "secondary"],
    description:
      "The color of the button when it is in an select state. It has nothing to do with active button",
    table: {
      defaultValue: { summary: "primary" },
    },
  },
  size: {
    control: false,
    options: ["small", "medium", "large"],
    defaultValue: "small",
    table: {
      defaultValue: { summary: "small" },
    },
  },
  parameters: {
    controls: {
      include: ["onChange", "children", "disabled", "size", "selectedColor"],
    },
    docs: {
      description: {
        component: `It is size of Button docs. For more details, please
				see [Material-UI Button](https://mui.com/material-ui/react-button/).`,
      },
    },
  },
} as ComponentMeta<typeof ToggleButton>;

const ButtonTemplate: ComponentStory<typeof ToggleButton> = (args) => {
  return (
    <Table sx={{ width: 900 }}>
      <TableHead>
        <TableRow>
          <TableCell colSpan={3} sx={{ fontWeight: "bold", fontSize: "16px" }}>
            <Typography variant="body1_sb">Size</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="body2_m">Small</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body2_m">Medium</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body2_m">Large</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {sizeList.map((size) => (
            <TableCell key={size} sx={{ "& button": { marginRight: "10px" } }}>
              <ToggleButton
                {...args}
                hasIconOnly
                icon={<Bell />}
                size={size}
                value="text1"
              />
              <ToggleButton {...args} size={size}>
                {args.children}
              </ToggleButton>
              <ToggleButton {...args} icon={<Bell />} size={size} value="text2">
                {args.children}
              </ToggleButton>
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const Size = ButtonTemplate.bind({});
