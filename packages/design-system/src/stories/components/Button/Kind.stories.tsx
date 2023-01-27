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
import { action } from "@storybook/addon-actions";

import Button from "@/components/Button/Button";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

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
    kind: {
      control: false,
      options: ["contained", "outlined", "ghost"],
      description: "Button has three Kinds Contained, Outlined, Ghost",
      defaultValue: "contained",
      table: {
        defaultValue: { summary: "contained" },
      },
    },
  },
  parameters: {
    controls: {
      include: ["onClick", "children", "size", "color", "disabled", "kind"],
    },
    docs: {
      description: {
        component: `It is a kind Button docs. For more details, please
				see [Material-UI Button](https://mui.com/material-ui/react-button/).`,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = ({
  kind,
  color,
  children,
  ...restProps
}) => {
  return (
    <>
      <Table sx={{ width: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={3}
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              <Typography variant="body1_sb">Kind</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ width: "33.33333%" }}>
              <Typography variant="body2_m">Contained(default)</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2_m">Outlined</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2_m">Ghost</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Button color={color} {...restProps}>
                {children}
              </Button>
            </TableCell>
            <TableCell>
              <Button kind="outlined" color="primary" {...restProps}>
                {children}
              </Button>
            </TableCell>
            <TableCell>
              <Button kind="ghost" color={color} {...restProps}>
                {children}
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <br />
      <br />
    </>
  );
};

export const Kind = ButtonTemplate.bind({});
