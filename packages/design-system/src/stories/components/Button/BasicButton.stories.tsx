import React from "react";
import { action } from "@storybook/addon-actions";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
} from "@mui/material";
import { Bell } from "@lunit/design-system-icons";

import Button from "@/components/Button";

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import type { ButtonProps } from "@/components/Button/Button.types";

type Size = Pick<ButtonProps, "size">;
type SizeValues = Size[keyof Size];
const sizeList: SizeValues[] = ["small", "medium", "large"];

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    icon: {
      control: false,
      description: `Use this prop when you want to add icon.
        \n It is added to the left of the text criteria,
        \n and only Icon can be checked when used with hasIconOnly.`,
      table: {
        defaultValue: { summary: "undefined" },
        type: { summary: "React.ReactNode" },
      },
    },
    hasIconOnly: {
      control: {
        type: "boolean",
      },
      description: `Option to handle so that only icons can be inserted
          \n If set to false, you can add Text.`,
      defaultValue: false,
      table: {
        defaultValue: { summary: "false" },
      },
    },
    children: {
      type: "string",
      defaultValue: "Text",
    },
    kind: {
      control: {
        type: "radio",
      },
      options: ["contained", "outlined", "ghost"],
      description: "Button has three Kinds Contained, Outlined, Ghost",
      defaultValue: "contained",
      table: {
        defaultValue: { summary: "contained" },
      },
    },
    color: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary", "error"],
      defaultValue: "primary",
      table: {
        defaultValue: { summary: "primary" },
      },
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
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "medium", "large"],
      defaultValue: "small",
      table: {
        defaultValue: { summary: "small" },
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
  parameters: {
    controls: {
      include: [
        "onClick",
        "children",
        "disabled",
        "size",
        "kind",
        "color",
        "icon",
        "hasIconOnly",
      ],
    },
    docs: {
      description: {
        component: `It is a Clickable default Button. For more details, please
				see [Material-UI Button](https://mui.com/material-ui/react-button/).`,
      },
    },
  },
} as ComponentMeta<typeof Button>;

export const BasicButton: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

const SizeButtonTemplate: ComponentStory<typeof Button> = (args) => {
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

export const Size = SizeButtonTemplate.bind({});
