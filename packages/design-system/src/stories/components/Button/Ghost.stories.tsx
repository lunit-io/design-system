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
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "medium", "large"],
      defaultValue: "small",
      /**
       * field for setting default value in storybook docs
       * Reference - https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#no-longer-inferring-default-values-of-args
       */
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
      options: ["primary", "secondary", "error"],
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
        component: `It is a Ghost kind Button. For more details, please
				see [Material-UI Button](https://mui.com/material-ui/react-button/).`,
      },
    },
  },
  decorators: [
    /**
     * TODO
     * Since Color Token system will be changed, below className should be changed accordingly
     * Also, the hover color will be set again with the color token system completion
     */
    (Story) => <Box className="light1">{Story()}</Box>,
  ],
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Table sx={{ width: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <Typography variant="body2_m">Ghost Primary</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2_m">Ghost Secondary</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2_m">Ghost Error</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Enable</Typography>
            </TableCell>
            <TableCell>
              <Button {...args} kind="ghost">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="ghost" color="secondary">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="ghost" color="error">
                {args.children}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Hover</Typography>
            </TableCell>
            <TableCell>
              <Button {...args} id="hover" kind="ghost">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} id="hover" kind="ghost" color="secondary">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} id="hover" kind="ghost" color="error">
                {args.children}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Focus</Typography>
            </TableCell>
            <TableCell>
              <Button {...args} kind="ghost" className="Mui-focusVisible">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...args}
                kind="ghost"
                color="secondary"
                className="Mui-focusVisible"
              >
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...args}
                kind="ghost"
                color="error"
                className="Mui-focusVisible"
              >
                {args.children}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body2_reg">Disabled</Typography>
            </TableCell>
            <TableCell>
              <Button {...args} kind="ghost" disabled>
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="ghost" color="secondary" disabled>
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="ghost" color="error" disabled>
                {args.children}
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

export const KindGhost = ButtonTemplate.bind({});
KindGhost.storyName = "Kind: Ghost";
