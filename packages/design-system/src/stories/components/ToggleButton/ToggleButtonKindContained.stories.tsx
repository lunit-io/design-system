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

import ToggleButton from "@/components/ToggleButton";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
  argTypes: {
    children: {
      type: "string",
      defaultValue: "Text",
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
    kind: {
      control: false,
      options: ["contained", "outlined", "ghost"],
      description: "Button has three Kinds Contained, Outlined, Ghost",
      defaultValue: "contained",
      table: {
        defaultValue: { summary: "contained" },
      },
    },
    color: {
      control: false,
      options: ["primary", "secondary"],
      defaultValue: "primary",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    disabled: {
      control: false,
      defaultValue: false,
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  parameters: {
    pseudo: {
      hover: ["#hover"],
      focusVisible: [".Mui-focusVisible"],
    },
    controls: {
      include: ["onClick", "children", "size", "kind", "color", "disabled"],
    },
    docs: {
      description: {
        component: `A Toggle Button can be used to group related options. please
				see [Material-UI Toggle Button](https://mui.com/material-ui/react-toggle-button/).`,
      },
    },
  },
} as ComponentMeta<typeof ToggleButton>;

const ButtonTemplate: ComponentStory<typeof ToggleButton> = (args) => {
  return (
    <>
      <Table sx={{ width: 450 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <Typography variant="body2_m">Contained Primary</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2_m">Contained Secondary</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Enable</Typography>
            </TableCell>
            <TableCell>
              <ToggleButton {...args} kind="contained">
                {args.children}
              </ToggleButton>
            </TableCell>
            <TableCell>
              <ToggleButton {...args} kind="contained" color="secondary">
                {args.children}
              </ToggleButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Hover</Typography>
            </TableCell>
            <TableCell>
              <ToggleButton {...args} id="hover" kind="contained">
                {args.children}
              </ToggleButton>
            </TableCell>
            <TableCell>
              <ToggleButton
                {...args}
                id="hover"
                kind="contained"
                color="secondary"
              >
                {args.children}
              </ToggleButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Focus</Typography>
            </TableCell>
            <TableCell>
              <ToggleButton
                {...args}
                kind="contained"
                className="Mui-focusVisible"
              >
                {args.children}
              </ToggleButton>
            </TableCell>
            <TableCell>
              <ToggleButton
                {...args}
                kind="contained"
                color="secondary"
                className="Mui-focusVisible"
              >
                {args.children}
              </ToggleButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Disabled</Typography>
            </TableCell>
            <TableCell>
              <ToggleButton {...args} kind="contained" disabled>
                {args.children}
              </ToggleButton>
            </TableCell>
            <TableCell>
              <ToggleButton
                {...args}
                kind="contained"
                color="secondary"
                disabled
              >
                {args.children}
              </ToggleButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <br />
      <br />
    </>
  );
};

export const KindContained = ButtonTemplate.bind({});
KindContained.storyName = "Kind: Contained";
