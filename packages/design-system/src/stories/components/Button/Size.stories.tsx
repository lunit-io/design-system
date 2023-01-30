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

import Button from "@/components/Button/Button";

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import type { ButtonProps } from "@/components/Button/Button.types";

type Size = Pick<ButtonProps, "size">;
type SizeValues = Size[keyof Size];
const sizeList: SizeValues[] = ["small", "medium", "large"];

export default {
  title: "Components/Button",
  component: Button,
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
    onClick: {
      type: "function",
      control: {
        type: "radio",
      },
      options: ["function", undefined],
      mapping: {
        function: action("onClick"),
        undefined: undefined,
      },
      defaultValue: "function",
      description:
        "It is a callback function that is called when the button is clicked.",
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
      include: ["onClick", "children", "disabled"],
    },
    docs: {
      description: {
        component: `It is size of Button docs. For more details, please
				see [Material-UI Button](https://mui.com/material-ui/react-button/).`,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => {
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
              <Button {...args} hasIconOnly icon={<Bell />} size={size} />
              <Button {...args} size={size}>
                {args.children}
              </Button>
              <Button {...args} icon={<Bell />} size={size}>
                {args.children}
              </Button>
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const Size = ButtonTemplate.bind({});
